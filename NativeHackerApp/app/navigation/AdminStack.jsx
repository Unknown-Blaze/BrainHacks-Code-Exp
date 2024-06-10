import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AdminHome from "../screens/Admin/AdminHome";
import AdminProfile from "../screens/Admin/AdminProfile";

const Stack = createStackNavigator();

export const AdminStack = () => {
  return (
    <Stack.Navigator initialRouteName="AdminHome">
      <Stack.Screen
        name="AdminHome"
        component={AdminHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AdminProfile"
        component={AdminProfile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
