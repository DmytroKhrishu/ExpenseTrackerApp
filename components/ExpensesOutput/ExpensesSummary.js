import { StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

export default function ExpensesSummary({ periodName, expenses }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.summaryContainer}>
      <Text>{periodName}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  summaryContainer: {
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 16,
    padding: 12,
    backgroundColor: GlobalStyles.colors.primary200,
  },
  // summaryText:{

  // }
});
