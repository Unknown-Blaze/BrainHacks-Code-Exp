import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import COLORS from "../constants/colors";
import { useTheme } from "../screens/ThemeProvider";

const Button = (props) => {
  const filledBgColor = props.color || COLORS.primary;
  const outlinedColor = COLORS.white;
  const bgColor = props.filled ? filledBgColor : outlinedColor;
  const textColor = props.filled ? COLORS.white : COLORS.primary;
  const { isDarkMode } = useTheme();
  const styles = getStyles(isDarkMode);

  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...{ backgroundColor: bgColor },
        ...props.style,
      }}
      onPress={props.onPress}
    >
      <Text style={{ fontSize: 18, ...{ color: textColor } }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const getStyles = (isDarkMode) => StyleSheet.create({
  button: {
    paddingBottom: 16,
    paddingVertical: 10,
    borderColor: isDarkMode ? COLORS.dark.blue : COLORS.light.blue,
    borderWidth: 2,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Button;
