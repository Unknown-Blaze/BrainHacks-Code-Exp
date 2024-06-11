import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "./app/screens/ThemeProvider";
import {AppStack} from "./app/navigation/AppStack"; // Ensure this path is correct

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </ThemeProvider>
  );
}
