import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import { useNavigation } from '@react-navigation/native';
import { getFormattedDate } from '../../util/date';

export default function ExpenseItem({ id, amount, date, description }) {
  const navigation = useNavigation();

  function expensePressHandler() {
    navigation.navigate('ManageExpense', {
      expenseId: id,
    });
  }

  return (
    <View style={styles.rootContainer}>
      <Pressable
        style={styles.itemContainer}
        onPress={expensePressHandler}
        android_ripple={{ color: GlobalStyles.colors.primary100 }}
      >
        <View style={styles.infoContainer}>
          <Text style={styles.descriptionText}>{description}</Text>
          <Text style={styles.itemText}>{getFormattedDate(date)}</Text>
        </View>
        <Text style={styles.amountText}>${amount.toFixed(2)}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    borderRadius: 18,
    overflow: 'hidden',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemContainer: {
    flex: 1,
    borderRadius: 18,
    padding: 16,
    backgroundColor: GlobalStyles.colors.primary400,
    elevation: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    color: 'white',
    fontSize: 14,
  },
  descriptionText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  amountText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 6,
    textAlignVertical: 'center',
  },
  infoContainer: {
    justifyContent: 'space-between',
  },
});
