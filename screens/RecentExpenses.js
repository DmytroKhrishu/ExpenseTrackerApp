import { Text, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

export default function RecentExpenses() {
  return <View>
    <ExpensesOutput expensesPeriod={'Last 7 days'} />
    </View>
}