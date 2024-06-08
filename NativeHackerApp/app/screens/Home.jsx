import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
  Platform,
} from "react-native";
import { StyleSheet } from "react-native";
import CheckBox from '@react-native-community/checkbox';

const getFontFamily = () => {
  if (Platform.OS === "ios") {
    return "Avenir-Book";
  } else if (Platform.OS === "android") {
    return "sans-serif";
  }
  return "System";
};

const ITEMS = [
  {
    id: '1',
    itemName: "White Bread",
    daysLeft: 3,
    used: true,
  },
  {
    id: '2',
    itemName: "Spinach",
    daysLeft: 1,
    used: true,
  },
  {
    id: '3',
    itemName: "Milk - Gardenia",
    daysLeft: 4,
    used: true,
  },
];

const PROMOS = [
  {
    id: '1',
    name: "FairPrice",
    location: "Kampung Admiralty",
    itemsOnSale: 11,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/233402a655fce3616d5404a84b9c5cfa3816ca29d7f7e9f57002b53e34d3e79f?apiKey=273a3e4505cd4e05ba15f44788b2ff1a&",
  },
  {
    id: '2',
    name: "ColdStorage",
    location: "Causeway Point",
    itemsOnSale: 2,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c03b51cecc85bf286bcb805b286071226ee009e347f7e995a30b085156157c0e?apiKey=273a3e4505cd4e05ba15f44788b2ff1a&",
  },
  {
    id: '3',
    name: "Giant",
    location: "Admiralty MRT",
    itemsOnSale: 4,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c63809a49994ae4e0643f0535a928d4afa6deda515c329258fc88bcd34fb7e4e?apiKey=273a3e4505cd4e05ba15f44788b2ff1a&",
  },
  {
    id: '4',
    name: "Prime",
    location: "NTU",
    itemsOnSale: 2,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c63809a49994ae4e0643f0535a928d4afa6deda515c329258fc88bcd34fb7e4e?apiKey=273a3e4505cd4e05ba15f44788b2ff1a&",
  },
];

const FoodSaved = ({ amount }) => (
  <View style={styles.savingsBox}>
    <Text style={styles.savingsText}>{amount} kg</Text>
    <Text style={styles.savingsLabel}>of food saved </Text>
  </View>
);

const MoneySaved = ({ amount }) => (
  <View style={styles.savingsBox}>
    <Text style={styles.savingsText}>$ {amount}</Text>
    <Text style={styles.savingsLabel}>of money saved</Text>
  </View>
);

const Item = ({ itemName, daysLeft, used }) => (
  <View>
    <View style={{ flexDirection: "row", justifyContent: "center"}}>
      <View style={{ flex: 0.6 }}>
        <Text style={styles.itemsFont}>{itemName}</Text>
      </View>
      <View style={{ flex: 0.2, alignItems: "center" }}>
        <Text style={styles.itemsFont}>{daysLeft}</Text>
      </View>
      <View style={{ flex: 0.2, alignItems: "flex-end"}}>
        <Text style = {styles.itemsFont}>Y/N</Text>
      </View>
    </View>
  </View>
);

const Promo = ({ name, location, itemsOnSale, image }) => (
  <TouchableOpacity
    style={styles.promotionBox}
    onPress={() => handlePromotionPress(name)}
  >
    <Image
      source={{
        uri: image,
      }}
      style={styles.promotionImage}
    />
    <View style={styles.promotionDetails}>
      <Text style={styles.promotionTitle}>{name}</Text>
      <Text style={styles.promotionSubtitle}>{location}</Text>
      <Text style={styles.promotionItems}>Items On Sale: {itemsOnSale}</Text>
    </View>
  </TouchableOpacity>
);

function Home() {
  const handleTrackerPress = () => {
    console.log("Navigating to GroceryTracker");
  };

  const handlePromotionPress = (title) => {
    console.log("Viewing promotion:", title);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>GroceryGrabber</Text>
      </View>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome Santosh,</Text>
        <View style={styles.savingsContainer}>
          <FoodSaved amount="3.3" />
          <MoneySaved amount="30" />
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
                itemName={item.itemName}
                daysLeft={item.daysLeft}
                used={item.used}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    maxWidth: 480,
    backgroundColor: "white",
    alignSelf: "center",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    width: "100%",
    backgroundColor: "#619f75",
    flex: 0.05
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  welcomeContainer: {
    flex: 0.95,
    paddingHorizontal: 16,
    marginTop: 8,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    textAlign: "center",
  },
  savingsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    flex: 0.
  },
  savingsBox: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 12,
    backgroundColor: "#619f75",
    marginHorizontal: 4,
  },
  savingsText: {
    fontSize: 32,
    fontWeight: "600",
    color: "white",
  },
  savingsLabel: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  expiringText: {
    marginTop: 16,
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
  },
  expiringContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  expiringItems: {
    flex: 1,
    alignItems: "flex-start",
  },
  expiringTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  expiringName: {
    marginTop: 4,
    fontSize: 16,
  },
  daysContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  expiringDays: {
    flexDirection: "column",
    alignItems: "center",
  },
  daysCount: {
    marginTop: 16,
    fontSize: 16,
  },
  expiringUsed: {
    flexDirection: "column",
    alignItems: "center",
    fontWeight: "bold",
  },
  usedBox: {
    marginTop: 8,
    width: 20,
    height: 20,
    borderColor: "grey",
    borderWidth: 3,
  },
  trackerText: {
    marginTop: 24,
    fontSize: 14,
    fontWeight: "bold",
    color: "grey",
  },
  promotionsText: {
    marginTop: 24,
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
  },
  promotionBox: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    marginVertical: 8,
    borderWidth: 2,
    borderColor: "grey",
  },
  promotionImage: {
    width: 106,
    aspectRatio: 1.2,
  },
  promotionDetails: {
    flex: 1,
    marginLeft: 8,
  },
  promotionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  promotionSubtitle: {
    fontSize: 14,
  },
  promotionItems: {
    marginTop: 8,
    fontSize: 14,
  },
  promotionBanner: {
    marginTop: 8,
    width: "100%",
    aspectRatio: 4.55,
    borderColor: "grey",
    borderWidth: 2,
  },
  expiryFont: {
    fontFamily: getFontFamily(),
    fontSize: 18,
    fontWeight: "800",
  },
  itemsFont: {
    fontFamily: getFontFamily(),
    fontSize: 18,
    fontWeight: "100",
  }
});

export default Home;
