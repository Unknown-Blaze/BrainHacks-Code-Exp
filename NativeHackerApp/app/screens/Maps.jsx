import * as React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

function handleFilterPress() {
  Alert.alert("Filters button pressed!");
}

function handleHomePress() {
  Alert.alert("Home button pressed!");
}

function handleSearchPress() {
  Alert.alert("Search button pressed!");
}

function handleProfilePress() {
  Alert.alert("Profile button pressed!");
}

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/4fa9f970bf792cd3caa8aac404b0d28afd2a78e3e26a7e0863f936e307aad46e?apiKey=273a3e4505cd4e05ba15f44788b2ff1a&",
        }}
        style={styles.headerImage}
      />
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitle}>GroceryGrabber</Text>
      </View>
      <TouchableOpacity onPress={handleFilterPress} style={styles.filterButton}>
        <Text style={styles.filterText}>Filters</Text>
        <Text style={styles.expandMore}>expand_more</Text>
      </TouchableOpacity>
    </View>
  );
};

const Banner = () => {
  return (
    <Image
      source={{
        uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/941da09cdf5ef04a588f9da105c8829771f11a81688db2fd0bcf49e665b8d691?apiKey=273a3e4505cd4e05ba15f44788b2ff1a&",
      }}
      style={styles.bannerImage}
    />
  );
};

const BottomBar = () => {
  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity onPress={handleHomePress} style={styles.iconButton}>
        <Text style={styles.iconText}>home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSearchPress} style={styles.iconButton}>
        <Text style={styles.iconText}>search</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleProfilePress} style={styles.iconButton}>
        <Text style={styles.iconText}>person</Text>
      </TouchableOpacity>
    </View>
  );
};

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Banner />
      <BottomBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    maxWidth: 480,
    alignSelf: "center",
  },
  headerContainer: {
    position: "relative",
    paddingBottom: 20,
  },
  headerImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 0.49,
  },
  headerTitleContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: "100%",
    backgroundColor: "rgba(128, 128, 128, 0.5)",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  filterButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 12,
    backgroundColor: "rgba(128, 128, 128, 0.8)",
    borderRadius: 30,
    alignSelf: "center",
    marginBottom: 476,
  },
  filterText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  expandMore: {
    fontSize: 14,
    color: "#D1D1D1",
    marginLeft: 8,
  },
  bannerImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 5.56,
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  iconButton: {
    padding: 10,
  },
  iconText: {
    fontSize: 24,
    color: "#000",
  },
});

export default MyComponent;
