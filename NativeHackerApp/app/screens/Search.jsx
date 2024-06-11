import * as React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Dimensions,
  FlatList,
  ImageBackground
} from "react-native";
import Header from "../general components/header";
import COLORS from "../constants/colors"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState } from "react";
import { Promo } from "./Home";
import { PROMOS, MARKETITEMS, RECIPES } from "./Lists";
import { useTheme } from "./ThemeProvider";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const FilterButton = ({ onPress, styles }) => (
  <TouchableOpacity style={styles.filterButtonContainer} onPress={onPress}>
    <View style={styles.filterButtonTextContainer}>
      <Text style={styles.filterButtonText}>Filters</Text>
    </View>
    <View style={styles.filterButtonIconContainer}>
      <Text style={styles.filterButtonIcon}>expand_more</Text>
    </View>
  </TouchableOpacity>
);

const InfoItem = ({ children }) => (
  <View>
    <Text>{children}</Text>
  </View>
);

export const MarketItem = ({ image, name, expiryDate, itemsOnSale, styles }) => (
  <TouchableOpacity
    style={styles.marketCard}
    onPress={() => handlePromotionPress(name)}
  >
    <Image
      source={{
        uri: image,
      }}
      style={styles.marketImage}
    />
    <View style={styles.marketContent}>
      <Text style={styles.marketTitle}>{name}</Text>
      <Text style={styles.marketExpiry}>{expiryDate}</Text>
      <Text style={styles.marketSale}>Items On Sale: {itemsOnSale}</Text>
    </View>
  </TouchableOpacity>
);

export const Recipe = ({ rating, location, name, numIng, time, image, styles }) => (
  <TouchableOpacity style = {styles.recipeContainer}>
    <Image source = {{uri: image}} style = {styles.mainImage}>
    </Image>
    <Text>Hello</Text>
  </TouchableOpacity>

  /*
  <ImageBackground resizeMode="cover" source = {{uri: image}} styles = {styles.mainImage}>
    <View style = {styles.topContainer}>
      <View style={styles.ratingContainer}>
        <Image resizeMode="auto" source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/d3913b1093e0c08a10080c42e0862e7b7345f97e27196d420585ed33eac1d0c5?apiKey=59cb32cf54144d2a81842acbd6f14d63&" }} style={styles.starIcon} />
        <View>
          <Text>5,0</Text>
        </View>
      </View>
    </View>  
    <View style={styles.locationContainer}>
      <Image resizeMode="auto" source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/64bb241643aabe308381e900f07e87004b2ea8930b8a7b7960983a7a9183556a?apiKey=59cb32cf54144d2a81842acbd6f14d63&" }} style={styles.locationIcon} />
      <View>
        <Text>{location}</Text>
      </View>
    </View>
    <View style={styles.titleContainer}>
      <Text>{name}</Text>
    </View>
    <View style={styles.infoContainer}>
      <InfoItem>{numIng}</InfoItem>
      <View style={styles.divider} />
      <InfoItem>{time}</InfoItem>
    </View>
  </ImageBackground>
  */
  /*
  <TouchableOpacity
    style={styles.marketCard}
    onPress={() => handlePromotionPress(name)}
  >
    <Image
      source={{
        uri: image,
      }}
      style={styles.marketImage}
    />
    <View style={styles.marketContent}>
      <Text style={styles.marketTitle}>{name}</Text>
      <Text style={styles.marketExpiry}>{expiryDate}</Text>
      <Text style={styles.marketSale}>Items On Sale: {itemsOnSale}</Text>
    </View>
  </TouchableOpacity>
  */
);

const Search = () => {

  const { isDarkMode } = useTheme();
  const styles = getStyles(isDarkMode);

  const [selectedButton, setSelectedButton] = useState(null);
  const [searchText, setSearchText] = useState('');

  const handlePress = (button) => {
    setSelectedButton(button);
  };

  const filterData = (data) => {
    return data.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
  }

  const renderPromo = ({ item }) => (
    <Promo
      name={item.name}
      location={item.location}
      itemsOnSale={item.itemsOnSale}
      image={item.image}
      styles={styles}
    />
  );

  const renderMarket = ({ item }) => (
    <MarketItem
      image = {item.image}
      name={item.name}
      expiryDate={item.expiryDate}
      itemsOnSale={item.itemsOnSale}
      styles={styles}
    />
  );

  const renderRecipe = ({ item }) => (
    <Recipe
      rating = {item.rating}
      location = {item.location}
      name = {item.name}
      numIng = {item.numIng}
      time = {item.time}
      image = {item.image}
      styles={styles}
    />
  );

  return (
    <SafeAreaView style = {styles.container}>
      <Header />
      <View style = {styles.inputView}>
        <TextInput defaultValue = "Enter a location" style = {styles.input} value = {searchText} onChangeText={setSearchText}/>
      </View>
      <View style = {{flex: 0.15, justifyContent: "center", marginTop: "1%"}}>
        <View style = {{flex: 0.3, flexDirection: "row", justifyContent: "center"}}>
          <TouchableOpacity style = {[styles.filterButton, selectedButton === 'button1' && styles.selectedButton]} onPress={() => handlePress('button1')}>
            <Text style = {[styles.buttonText, selectedButton === 'button1' && styles.selectedButtonText]}>Supermarket</Text>
          </TouchableOpacity >
          <TouchableOpacity style = {[styles.filterButton, selectedButton === 'button2' && styles.selectedButton]} onPress={() => handlePress('button2')}>
            <Text style = {[styles.buttonText, selectedButton === 'button2' && styles.selectedButtonText]}>Item</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {[styles.filterButton, selectedButton === 'button3' && styles.selectedButton]} onPress={() => handlePress('button3')}>
            <Text style = {[styles.buttonText, selectedButton === 'button3' && styles.selectedButtonText]}>Recipe</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flex: 0.7}}>

        </View>
      </View>
      <View style = {{flex: 0.75, paddingHorizontal: 0.04 * width}}>
        <View style = {{flex: 0.1}}>
          <Text style = {styles.resultsText}>Results</Text>
        </View>
        <View style = {{flex: 0.9}}>
          {selectedButton === 'button1' && (
          <FlatList
            data={filterData(PROMOS)}
            renderItem={renderPromo}
            keyExtractor={(item) => item.id}
            persistentScrollbar={true}
          />)}
          {selectedButton === 'button2' && (
          <FlatList
            data={filterData(MARKETITEMS)}
            renderItem={renderMarket}
            keyExtractor={(item) => item.id}
            persistentScrollbar={true}
          />)}
          {selectedButton === 'button3' && (
          <FlatList
            data={filterData(RECIPES)}
            renderItem={renderRecipe}
            keyExtractor={(item) => item.id}
            persistentScrollbar={true}
          />
          )} 
        </View>
      </View>
    </SafeAreaView>
  )
};

const getStyles = (isDarkMode) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: isDarkMode ? COLORS.dark.white : COLORS.light.white,
    width: "100%",
    alignSelf: "center",
  },
  inputView: {
    flex: 0.1,
    justifyContent: "center",
    paddingHorizontal: width * 0.05,
    marginTop: height * 0.01,
  },
  input: {
    flex: 0.8,
    height: height * 0.06,
    borderRadius: 20,
    paddingLeft: width * 0.05,
    fontSize: width * 0.04,
    color: isDarkMode ? COLORS.dark.white : COLORS.light.white,
    backgroundColor: isDarkMode ? COLORS.dark.green : COLORS.light.green,
  },
  filterButton: {
    width: width * 0.28,
    height: height * 0.06,
    backgroundColor: isDarkMode ? COLORS.dark.white : COLORS.light.white,
    marginHorizontal: width * 0.02,
    borderRadius: 1000,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: isDarkMode ? COLORS.dark.green : COLORS.light.green,
  },
  buttonText: {
    color: isDarkMode ? COLORS.dark.black : COLORS.light.black,
    fontSize: width * 0.04,
  },
  selectedButtonText: {
    color: isDarkMode ? COLORS.dark.white : COLORS.light.white,
  },
  resultsText: {
    color: isDarkMode ? COLORS.dark.dark_green : COLORS.light.dark_green,
    fontWeight: "200",
    fontSize: width * 0.06,
  },
  groceryItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: width * 0.04,
    borderBottomWidth: 1,
    borderColor: isDarkMode ? COLORS.dark.grey : COLORS.light.grey,
  },
  groceryItemImage: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: 8,
    marginRight: width * 0.04,
  },
  groceryItemDetails: {
    flex: 1,
  },
  groceryItemTitle: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    color: isDarkMode ? COLORS.dark.white : COLORS.light.white,
  },
  groceryItemFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: height * 0.01,
    color: isDarkMode ? COLORS.dark.white : COLORS.light.white,
  },
  promotionsText: {
    fontSize: width * 0.045,
    fontWeight: "bold",
    color: isDarkMode ? COLORS.dark.dark_green : COLORS.light.dark_green,
    textAlign: "left",
    marginTop: height * 0.02,
  },
  promotionBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: height * 0.02,
    padding: width * 0.02,
    borderWidth: 1,
    borderColor: isDarkMode ? COLORS.dark.grey : COLORS.light.grey,
    borderRadius: 8,
  },
  promotionImage: {
    width: width * 0.15,
    height: width * 0.15,
    marginRight: width * 0.02,
    borderRadius: 4,
  },
  promotionDetails: {
    flex: 1,
  },
  promotionTitle: {
    fontSize: width * 0.04,
    fontWeight: "bold",
    color: isDarkMode ? COLORS.dark.white : COLORS.light.white,
  },
  promotionSubtitle: {
    fontSize: width * 0.035,
    color: isDarkMode ? COLORS.dark.grey : COLORS.light.grey,
  },
  promotionItems: {
    fontSize: width * 0.03,
    color: isDarkMode ? COLORS.dark.grey : COLORS.light.grey,
  },
  expiringText: {
    fontSize: width * 0.045,
    fontWeight: "bold",
    color: isDarkMode ? COLORS.dark.dark_green : COLORS.light.dark_green,
    textAlign: "left",
    marginTop: height * 0.02,
  },
  expiryFont: {
    fontSize: width * 0.04,
    fontWeight: "bold",
  },
  itemsFont: {
    fontSize: width * 0.04,
  },
  trackerText: {
    marginTop: height * 0.015,
    fontSize: width * 0.04,
    color: isDarkMode ? COLORS.dark.dark_green : COLORS.light.dark_green,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  filterButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: height * 0.02,
  },
  flatListContainer: {
    flex: 0.9,
    paddingHorizontal: width * 0.04,
  },
  searchIcon: {
    position: 'absolute',
    left: width * 0.05,
  },
  marketImage: {
    width: width * 0.15,
    height: width * 0.15,
    marginRight: width * 0.02,
    borderRadius: 4,
  },
  marketContent: {
    flex: 1,
  },
  marketTitle: {
    fontSize: width * 0.04,
    fontWeight: "bold",
    color: isDarkMode ? COLORS.dark.black : COLORS.light.black,
  },
  marketExpiry: {
    fontSize: width * 0.035,
    color: isDarkMode ? COLORS.dark.grey : COLORS.light.grey,
  },
  marketSale: {
    fontSize: width * 0.03,
    color: isDarkMode ? COLORS.dark.grey : COLORS.light.grey,
  },
  marketCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: height * 0.02,
    padding: width * 0.02,
    borderWidth: 1,
    borderColor: isDarkMode ? COLORS.dark.grey : COLORS.light.grey,
    borderRadius: 8,
  },
  recipeContainer: {
    width: 0.9 * width,
    height: 0.2 * height,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  mainImage: {
    width: "100%",
    height: "100%",
    resizeMode: 'cover',
    borderRadius: 20
  },
  topContainer: {
    position: "relative",
    display: "flex",
    width: "100%",
    alignItems: "stretch",
    gap: 20,
    whiteSpace: "nowrap",
    justifyContent: "space-between",
  },
  ratingContainer: {
    alignItems: "stretch",
    borderRadius: 8,
    backdropFilter: "blur(2.5px)",
    backgroundColor: "rgba(48, 48, 48, 0.30)",
    display: "flex",
    gap: 4,
    padding: "4px 8px",
  },
  starIcon: {
    position: "relative",
    width: 16,
    flexShrink: 0,
    margin: "auto 0",
    aspectRatio: "1",
  },
  iconShadow: {
    filter: "drop-shadow(0px 8px 25px rgba(32, 32, 32, 0.15))",
    alignSelf: "start",
    position: "relative",
    width: 31,
    flexShrink: 0,
    aspectRatio: "1.19",
  },
  locationContainer: {
    position: "relative",
    display: "flex",
    alignItems: "stretch",
    gap: 4,
    color: isDarkMode ? COLORS.dark.white : COLORS.light.white,
    fontWeight: "700",
  },
  locationIcon: {
    position: "relative",
    width: 16,
    flexShrink: 0,
    aspectRatio: "1",
  },
  titleContainer: {
    position: "relative",
    marginTop: 18,
    font: "16px/22px Poppins, sans-serif",
  },
  infoContainer: {
    alignItems: "stretch",
    position: "relative",
    display: "flex",
    marginTop: 5,
    gap: 7,
    fontSize: 12,
    fontWeight: "400",
  },
  divider: {
    borderColor: "rgba(255, 255, 255, 1)",
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: isDarkMode ? COLORS.dark.white : COLORS.light.white,
    width: 1,
    flexShrink: 0,
    height: 18,
  },
});

export default Search;