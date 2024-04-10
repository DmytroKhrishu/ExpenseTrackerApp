import { FlatList, Text, View } from 'react-native';
import ExpenseItem from './ExpenseItem';

function renderExpenseItem(itemData) {
  return (
    <ExpenseItem
      amount={itemData.item.amount}
      date={itemData.item.date.toString()}
      description={itemData.item.description}
    />
  );
}

export default function ExpensesList({ expenses }) {
  return <FlatList data={expenses} renderItem={renderExpenseItem} />;
}
