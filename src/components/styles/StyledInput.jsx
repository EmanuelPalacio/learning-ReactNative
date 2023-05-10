import { StyleSheet, TextInput, View } from "react-native";
import theme from "../../theme/theme.js";

export default function StyledInput({
  placeholder,
  value,
  keyboardType,
  onChangeText,
  secureTextEntry,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={theme.colors.primaryText}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType === "email" ? "email-address" : undefined}
        autoCapitalize={keyboardType === "email" ? "none" : undefined}
        secureTextEntry={secureTextEntry ? true : false}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: theme.colors.secondary,
  },
  input: {
    flex: 1,
    color: theme.colors.primaryText,
    fontSize: theme.fontSizes.subheading,
    fontFamily: theme.fontFamily.main,
    padding: 5,
  },
});
