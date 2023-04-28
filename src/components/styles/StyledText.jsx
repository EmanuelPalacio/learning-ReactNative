import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../../theme/theme";

export default function StyledText({ children, color, fontSize, fontWeight }) {
  const textStyles = [
    styles.text,
    color === "secondary" && styles.colorSecondary,
    color === "third" && styles.colorThird,
    fontSize === "subheading" && styles.subHeading,
    fontSize === "title" && styles.title,
    fontWeight === "bold" && styles.bold,
  ];

  return <Text style={textStyles}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: `rgb(${theme.colors.primaryText})`,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fontFamily.main,
    fontWeight: theme.fontWeights.normal,
  },

  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  subHeading: {
    fontSize: theme.fontSizes.subheading,
  },
  title: {
    fontSize: theme.fontSizes.header,
  },
  colorSecondary: {
    color: `rgb(${theme.colors.secondaryText})`,
  },
  colorThird: {
    color: `rgb(${theme.colors.thirdText})`,
  },
  colorFourth: {
    color: `rgb(${theme.colors.fourthText})`,
  },
});
