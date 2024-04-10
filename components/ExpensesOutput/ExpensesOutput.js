import { StyleSheet, Text, View } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';
import { GlobalStyles } from '../../constants/styles';

export default function ExpensesOutput({
  expenses,
  expensesPeriod,
  fallbackText,
}) {
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={expensesPeriod} expenses={expenses} />
      {expenses.length === 0 ? (
        <Text style={styles.infoText}>{fallbackText}</Text>
      ) : (
        <ExpensesList expenses={expenses} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 32
  },
});
