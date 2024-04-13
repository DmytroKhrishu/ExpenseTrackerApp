import { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import { ExpensesContext } from '../store/expenses-context';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import { deleteExpense, storeExpense, updateExpense } from '../util/http';
import LoadingOverlay from '../components/UI/LoadingOverlay';

export default function ManageExpense({ route, navigation }) {
  const [isSending, setIsSending] = useState(false);
  const expenseCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const selectedExpense = expenseCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  useEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    setIsSending(true);
    expenseCtx.deleteExpense(editedExpenseId);
    deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function confirmHandler(expenseData) {
    setIsSending(true);
    if (isEditing) {
      expenseCtx.updateExpense(editedExpenseId, expenseData);
      updateExpense(editedExpenseId, expenseData);
    } else {
      const id = await storeExpense(expenseData);
      expenseCtx.addExpense({ ...expenseData, id: id });
    }
    navigation.goBack();
  }

  if (isSending) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? 'Update' : 'Add'}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        defaultValues={selectedExpense}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon={'trash'}
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});
