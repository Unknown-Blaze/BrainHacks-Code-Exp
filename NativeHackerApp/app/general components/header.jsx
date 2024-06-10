import React from "react";
import { View, Text, StyleSheet, Platform, Dimensions } from "react-native";
import COLORS from "../constants/colors";
import { useTheme } from "../screens/ThemeProvider";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const Header = () => {
  const { isDarkMode } = useTheme();
  const styles = getStyles(isDarkMode);
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>GroceryGrabber</Text>
    </View>
  );
};

const getStyles = (isDarkMode) => StyleSheet.create({
  header: {
    paddingTop: Platform.OS == "ios" ? "3.5%" : "7.5%", 
    paddingBottom: Platform.OS == "ios" ? "3.5%" : null, 
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: isDarkMode ? COLORS.dark.green : COLORS.light.green,
    // if platform is ios, then ignore... otherwise height = 0.05*height    
    height: Platform.OS == "ios" ? null : "10%",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: isDarkMode ? COLORS.dark.white : COLORS.light.white,
    textAlign: "center",
  },
});

export default Header;
