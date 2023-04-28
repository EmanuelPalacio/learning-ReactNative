import { SafeAreaView } from "react-native-safe-area-context";
import { statusBarHeight } from "expo-constants";
import theme from "./theme/theme.js";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import ListScreen from "./screens/ListScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar style="light" />
      <ListScreen />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: statusBarHeight,
    backgroundColor: `rgb(${theme.colors.primary})`,
  },
});
