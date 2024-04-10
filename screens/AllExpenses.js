import { Text, View } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { useContext } from 'react';
import { ExpensesContext } from '../store/expenses-context';

export default function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  const expenses = expensesCtx.expenses;

  return (
    <View>
      <ExpensesOutput
        expensesPeriod={'All Time'}
        expenses={expenses}
        fallbackText={'No expenses yet.'}
      />
    </View>
  );
}
