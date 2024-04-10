import { StyleSheet, View } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';
import { GlobalStyles } from '../../constants/styles';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'bike',
    amount: 14999.99,
    date: new Date('2024-05-05'),
  },
  {
    id: 'e2',
    description: 'another bike',
    amount: 8999.99,
    date: new Date('2024-04-06'),
  },
  {
    id: 'e3',
    description: 'bike computer',
    amount: 999.99,
    date: new Date('2024-04-10'),
  },
  {
    id: 'e4',
    description: 'bike computer',
    amount: 999.99,
    date: new Date('2024-04-10'),
  },
  {
    id: 'e5',
    description: 'bike computer',
    amount: 999.99,
    date: new Date('2024-04-10'),
  },
  {
    id: 'e6',
    description: 'bike computer',
    amount: 999.99,
    date: new Date('2024-04-10'),
  },
  {
    id: 'e7',
    description: 'bike computer',
    amount: 999.99,
    date: new Date('2024-04-10'),
  },
  {
    id: 'e8',
    description: 'bike computer',
    amount: 999.99,
    date: new Date('2024-04-10'),
  },
  {
    id: 'e9',
    description: 'bike computer',
    amount: 999.99,
    date: new Date('2024-04-10'),
  },
];

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={expensesPeriod} expenses={DUMMY_EXPENSES} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: GlobalStyles.colors.primary700
  }
})