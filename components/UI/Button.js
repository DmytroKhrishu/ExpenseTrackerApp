import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

export default function Button({ text, onPress, mode }) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: GlobalStyles.colors.primary400 }}
        style={[styles.buttonContainer, mode === 'flat' && styles.flat]}
      >
        <View>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
            {text}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 12,
    borderRadius: 10,
    overflow: 'hidden',
    minWidth: 100,
  },
  buttonContainer: {
    padding: 12,
    borderRadius: 6,
    backgroundColor: GlobalStyles.colors.primary100,
    elevation: 6,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
  flat: {
    backgroundColor: 'transparent',
    elevation: 0
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
});
