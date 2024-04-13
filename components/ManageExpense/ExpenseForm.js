import { StyleSheet, TextInput, View } from 'react-native';
import Input from './Input';
import { useState } from 'react';

export default function ExpenseForm() {
  const [inputValues, setInputValues] = useState({
    amount: '',
    date: '',
    description: '',
  });

  function inputChangedHandler(inputId, enteredValue) {
    setInputValues((prev) => {
      return {
        ...prev,
        [inputId]: enteredValue,
      };
    });
  }

  return (
    <View>
      <View style={styles.inputsContainer}>
        <Input
          label="Amount"
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: () => inputChangedHandler('amount'),
            value: inputValues.amount,
          }}
          style={styles.rowInput}
        />
        <Input
          label="Date"
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: () => inputChangedHandler('date'),
            value: inputValues.date,
          }}
          style={styles.rowInput}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: () => inputChangedHandler('description'),
          value: inputValues.description,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  rowInput: {
    flex: 1,
  },
});
