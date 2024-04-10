import { FlatList, StyleSheet, Text, View } from 'react-native';
import ExpenseItem from './ExpenseItem';

function renderExpenseItem(itemData) {
  return (
    <ExpenseItem
      id={itemData.item.id}
      amount={itemData.item.amount}
      date={itemData.item.date}
      description={itemData.item.description}
    />
  );
}

export default function ExpensesList({ expenses }) {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={expenses}
        renderItem={renderExpenseItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
   marginBottom: 120 
  }
})
