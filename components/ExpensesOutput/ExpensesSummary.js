import { StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

export default function ExpensesSummary({ periodName, expenses }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.summaryContainer}>
      <Text style={styles.periodText}>{periodName}</Text>
      <Text style={styles.sumText}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 16,
    padding: 12,
    backgroundColor: GlobalStyles.colors.primary100,
    alignItems: 'center'
  },
  periodText: {
    fontWeight: 'bold',
    fontSize: 14, 
  },
  sumText: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 6,
  }
});
