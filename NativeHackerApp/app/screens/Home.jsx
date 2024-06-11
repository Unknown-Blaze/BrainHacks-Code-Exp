import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
  Platform,
  StyleSheet,
  Dimensions
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../constants/colors";
import Header from "../general components/header";
import { PROMOS, ITEMS } from "./Lists";

import { useTheme } from "./ThemeProvider";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const getFontFamily = () => {
  if (Platform.OS === "ios") {
    return "Avenir-Book";
  } else if (Platform.OS === "android") {
    return "sans-serif";
  }
  return "System";
};

const FoodSaved = ({ amount, styles }) => (
  <View style={styles.savingsBox}>
    <Text style={styles.savingsText}>{amount} kg</Text>
    <Text style={styles.savingsLabel}>of food saved</Text>
  </View>
);

const MoneySaved = ({ amount, styles }) => (
  <View style={styles.savingsBox}>
    <Text style={styles.savingsText}>$ {amount}</Text>
    <Text style={styles.savingsLabel}>of money saved</Text>
  </View>
);

const Item = ({ name, daysLeft, used, styles }) => (
  <View>
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      <View style={{ flex: 0.6 }}>
        <Text style={styles.itemsFont}>{name}</Text>
      </View>
      <View style={{ flex: 0.2, alignItems: "center" }}>
        <Text style={styles.itemsFont}>{daysLeft}</Text>
      </View>
      <View style={{ flex: 0.2, alignItems: "flex-end" }}>
        <Text style={styles.itemsFont}>Y/N</Text>
      </View>
    </View>
  </View>
);


export const Promo = ({ name, location, itemsOnSale, onPress, styles }) => (
  <TouchableOpacity
    style={styles.promotionBox}
    onPress = {onPress}
  >
    <FontAwesome5 name = "store" size = {0.04 * height} style = {{paddingRight: 0.02 * width}} color = {COLORS.brown}/>
    <View style={styles.promotionDetails}>
      <Text style={styles.promotionTitle}>{name}</Text>
      <Text style={styles.promotionSubtitle}>{location}</Text>
      <Text style={styles.promotionItems}>Items On Sale: {itemsOnSale}</Text>
    </View>
  </TouchableOpacity>
);

function Home() {
  const navigation = useNavigation();
  const { isDarkMode } = useTheme();
  const styles = getStyles(isDarkMode);

  const handleTrackerPress = () => {
    console.log("Navigating to GroceryTracker");
    navigation.navigate("CameraScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome Santosh,</Text>
        <View style={styles.savingsContainer}>
          <FoodSaved amount="3.3" styles={styles} />
          <MoneySaved amount="30" styles={styles} />
        </View>
        <Text style={styles.expiringText}>Food Expiring Soon:</Text>
        <View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 0.6 }}>
              <Text style={styles.expiryFont}>Item</Text>
            </View>
            <View style={{ flex: 0.2 }}>
              <Text style={styles.expiryFont}>Days Left</Text>
            </View>
            <View style={{ flex: 0.2, alignItems: "flex-end" }}>
              <Text style={styles.expiryFont}>Used</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 0.2 }}>
          <FlatList
            data={ITEMS}
            renderItem={({ item }) => (
              <Item
                name={item.name}
                daysLeft={item.daysLeft}
                used={item.used}
                styles={styles} // Pass the styles prop to Item component
              />
            )}
            keyExtractor={(item) => item.id}
            persistentScrollbar={true}
          />
        </View>
        <TouchableOpacity onPress={handleTrackerPress}>
          <Text style={styles.trackerText}>Go to GroceryTracker &gt;&gt;</Text>
        </TouchableOpacity>
        <Text style={styles.promotionsText}>Promotions:</Text>
        <View style={{ flex: 0.7 }}>
          <FlatList
            data={PROMOS}
            renderItem={({ item }) => (
              <Promo
                name={item.name}
                location={item.location}
                itemsOnSale={item.itemsOnSale}
                image={item.image}
                styles={styles}
                onPress={() => navigation.navigate("ListItems")}
              />
            )}
            keyExtractor={(item) => item.id}
            persistentScrollbar={true}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const getStyles = (isDarkMode) => StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: isDarkMode ? COLORS.dark.white : COLORS.light.white,
    alignSelf: "center",
  },
  welcomeContainer: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 8,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: isDarkMode ? COLORS.dark.dark_green : COLORS.light.dark_green,
    textAlign: "center",
  },
  savingsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  savingsBox: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 12,
    backgroundColor: isDarkMode ? COLORS.dark.green : COLORS.light.green,
    marginHorizontal: 4,
    borderRadius: 10,
  },
  savingsText: {
    fontSize: 32,
    fontWeight: "600",
    color: isDarkMode ? COLORS.dark.white : COLORS.light.white,
    textAlign: "center",
  },
  savingsLabel: {
    marginTop: 8,
    fontSize: 16,
    color: isDarkMode ? COLORS.dark.white : COLORS.light.white,
    textAlign: "center",
  },
  expiringText: {
    fontSize: 18,
    fontWeight: "bold",
    color: isDarkMode ? COLORS.dark.dark_green : COLORS.light.dark_green,
    textAlign: "left",
    marginTop: 20,
  },
  expiryFont: {
    fontSize: 16,
    fontWeight: "bold",
    color: isDarkMode ? COLORS.dark.black : COLORS.light.black,
  },
  itemsFont: {
    fontSize: 16,
    color: isDarkMode ? COLORS.dark.black : COLORS.light.black,
  },
  trackerText: {
    marginTop: 12,
    fontSize: 16,
    color: isDarkMode ? COLORS.dark.dark_green : COLORS.light.dark_green,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  promotionsText: {
    fontSize: 18,
    fontWeight: "bold",
    color: isDarkMode ? COLORS.dark.dark_green : COLORS.light.dark_green,
    textAlign: "left",
    marginTop: 20,
  },
  promotionBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: isDarkMode ? COLORS.dark.grey : COLORS.light.grey,
    borderRadius: 8,
  },
  promotionImage: {
    width: 60,
    height: 60,
    marginRight: 8,
    borderRadius: 4,
  },
  promotionDetails: {
    flex: 1,
  },
  promotionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: isDarkMode ? COLORS.dark.black : COLORS.light.black,
  },
  promotionSubtitle: {
    fontSize: 14,
    color: isDarkMode ? COLORS.dark.grey : COLORS.light.grey,
  },
  promotionItems: {
    fontSize: 12,
    color: isDarkMode ? COLORS.dark.grey : COLORS.light.grey,
  },
});

export default Home;
