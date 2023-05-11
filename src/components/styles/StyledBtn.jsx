import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import theme from "../../theme/theme";
import StyledText from "./StyledText";

export default function StyledBtn({
  text,
  action,
  width,
  height,
  fontSize,
  restStyleProps,
}) {
  const btn = [
    styles.button,
    {
      width: width ? width : 300,
      height: height ? height : 50,
    },
    restStyleProps,
  ];
  return (
    <TouchableOpacity style={btn} onPress={action}>
      <StyledText color="third" fontSize={fontSize && fontSize}>
        {text}
      </StyledText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.secondary,
    borderRadius: 10,
  },
});
