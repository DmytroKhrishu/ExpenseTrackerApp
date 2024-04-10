import { View } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'bike',
    amount: 14999.99,
    date: new Date('2024-01-01'),
  },
  {
    id: 'e2',
    description: 'another bike',
    amount: 8999.99,
    date: new Date('2024-04-01'),
  },
  {
    id: 'e3',
    description: 'bike computer',
    amount: 999.99,
    date: new Date('2024-04-10'),
  },
];

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary periodName={expensesPeriod} expenses={DUMMY_EXPENSES} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}
