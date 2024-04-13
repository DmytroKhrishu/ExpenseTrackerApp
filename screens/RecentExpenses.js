import { Text, View } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { useContext, useEffect, useState } from 'react';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';
import { fetchExpenses } from '../util/http';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import ErrorOverlay from '../components/UI/ErrorOverlay';

export default function RecentExpenses() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      setIsLoading(true);
      try {
        const expenses = await fetchExpenses();
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        setError('Could not fetch expenses.');
      }
      setIsLoading(false);
    }
    getExpenses();
  }, []);

  function errorHandler() {
    setError(null)
  }

  if(error && !isLoading) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />
  }

  if (isLoading) {
    return <LoadingOverlay />;
  }

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo;
  });

  return (
    <View>
      <ExpensesOutput
        expensesPeriod={'Last 7 days'}
        expenses={recentExpenses}
        fallbackText={'No expenses in the last 7 days.'}
      />
    </View>
  );
}
