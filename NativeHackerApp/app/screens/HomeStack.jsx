// HomeStack.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, Platform, View, Dimensions } from 'react-native';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import Search from './Search';
import Itinerary from './Itinerary';
import Maps from './Maps';
import Account from './Account';
import Home from './Home';
import COLORS from "../constants/colors";
import { useTheme } from "./ThemeProvider";

const Tab = createBottomTabNavigator();
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const getStyles = (isDarkMode) => ({
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 0.1 * height,
    backgroundColor: isDarkMode ? COLORS.dark.green : COLORS.light.green,
  },
  tabBarIconColor: (focused) => (focused ? COLORS.white : COLORS.black),
  tabBarTextColor: (focused) => (focused ? COLORS.white : COLORS.black),
});

export default function HomeStack() {
  const { isDarkMode } = useTheme();
  const styles = getStyles(isDarkMode);

  const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: styles.tabBarStyle,
  };

  return (
    <Tab.Navigator screenOptions={screenOptions} initialRouteName={"Home"}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Entypo name="home" size={24} color={styles.tabBarIconColor(focused)} />
                <Text style={{ fontSize: 0.03 * width, color: styles.tabBarTextColor(focused) }}>HOME</Text>
              </View>
            );
          }
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Entypo name="magnifying-glass" size={24} color={styles.tabBarIconColor(focused)} />
                <Text style={{ fontSize: 0.03 * width, color: styles.tabBarTextColor(focused) }}>SEARCH</Text>
              </View>
            );
          }
        }}
      />
      <Tab.Screen
        name="Maps"
        component={Maps}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{
                top: Platform.OS == "ios" ? -30 : -20,
                width: Platform.OS == "ios" ? 0.2 * width : 0.22 * width,
                height: Platform.OS == "ios" ? 0.2 * width : 0.2 * width,
                borderRadius: 0.5 * width,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#90dfaa"
              }}>
                <FontAwesome name="compass" size={0.12 * width} color={styles.tabBarIconColor(focused)} />
              </View>
            );
          }
        }}
      />
      <Tab.Screen
        name="Itinerary"
        component={Itinerary}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Entypo name="menu" size={24} color={styles.tabBarIconColor(focused)} />
                <Text style={{ fontSize: 0.03 * width, color: styles.tabBarTextColor(focused) }}>INVENTORY</Text>
              </View>
            );
          }
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Entypo name="globe" size={24} color={styles.tabBarIconColor(focused)} />
                <Text style={{ fontSize: 0.03 * width, color: styles.tabBarTextColor(focused) }}>PROFILE</Text>
              </View>
            );
          }
        }}
      />
    </Tab.Navigator>
  );
}
