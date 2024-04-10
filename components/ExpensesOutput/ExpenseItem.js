import { StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

export default function ExpenseItem({ amount, date, description }) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>${amount}</Text>
      <Text style={styles.itemText}>{date.toString()}</Text>
      <Text style={styles.itemText}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 12,
    borderRadius: 18,
    backgroundColor: GlobalStyles.colors.primary400,
  },
  itemText: {
    color: 'white',
    
  },
});
