import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Alert, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../general components/header";
import COLORS from "../constants/colors";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "./ThemeProvider"; // Adjust the path as necessary

const { width } = Dimensions.get("window");

const ProfileCard = ({ imageUrl, name, daysSaved, isDarkMode }) => (
  <View style={getStyles(isDarkMode).profileContainer}>
    <Text style={getStyles(isDarkMode).profileName}>{name}</Text>
    <View style={getStyles(isDarkMode).daysSavedContainer}>
      <Image source={{ uri: imageUrl }} style={getStyles(isDarkMode).profileImage} />
      <Text style={getStyles(isDarkMode).daysSavedText}>{daysSaved}</Text>
    </View>
    <Text style={getStyles(isDarkMode).subtitle}>Days of Earth You Have Saved</Text>
  </View>
);

const SettingItem = ({ iconUrl, label, onPress, isDarkMode }) => (
  <TouchableOpacity onPress={onPress} style={getStyles(isDarkMode).settingItem}>
    <Image source={{ uri: iconUrl }} style={getStyles(isDarkMode).settingIcon} />
    <Text style={getStyles(isDarkMode).settingItemText}>{label}</Text>
  </TouchableOpacity>
);

const CustomSwitch = ({ value, onValueChange, isDarkMode }) => (
  <TouchableOpacity
    style={[getStyles(isDarkMode).switch, value ? getStyles(isDarkMode).switchOn : getStyles(isDarkMode).switchOff]}
    onPress={onValueChange}
  >
    <View style={[getStyles(isDarkMode).slider, value ? getStyles(isDarkMode).sliderOn : getStyles(isDarkMode).sliderOff]} />
  </TouchableOpacity>
);

const ToggleItem = ({ label, value, onToggle, isDarkMode }) => (
  <View style={getStyles(isDarkMode).toggleItemContainer}>
    <Text style={getStyles(isDarkMode).settingItemText}>{label}</Text>
    <CustomSwitch value={value} onValueChange={onToggle} isDarkMode={isDarkMode} />
  </View>
);

function Account() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isPushNotifications, setIsPushNotifications] = React.useState(false);
  const navigation = useNavigation();
  
  const handleEditProfile = () => Alert.alert("Edit profile clicked");
  const handleChangePassword = () => Alert.alert("Change password clicked");
  const handleDarkModeToggle = () => {
    toggleTheme();
    Alert.alert("Dark mode toggled");
  };
  const handlePushNotificationsToggle = () => {
    setIsPushNotifications(!isPushNotifications);
    Alert.alert("Push notifications toggled");
  };

  return (
    <SafeAreaView style={getStyles(isDarkMode).container}>
      <Header />
      <ScrollView contentContainerStyle={getStyles(isDarkMode).scrollViewContainer}>
        <ProfileCard
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/7611a6a8b21db1ffd7d72b26deed298c206723f270e908d33d06ecc90f247e9a?apiKey=273a3e4505cd4e05ba15f44788b2ff1a&"
          name="Kaliraj Santosh"
          daysSaved="330"
          isDarkMode={isDarkMode}
        />
        <Text style={getStyles(isDarkMode).settingsTitle}>Settings</Text>
        <View style={getStyles(isDarkMode).settingsContainer}>
          <SettingItem
            iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/31032d447a397d461dca8487d83d26125a5d62d04c8d5fe97a2b1b8ab22e231c?apiKey=273a3e4505cd4e05ba15f44788b2ff1a&"
            label="Kaliraj Santoshraj"
            onPress={() => Alert.alert("Account Settings clicked")}
            isDarkMode={isDarkMode}
          />
          <Text style={getStyles(isDarkMode).sectionText}>Account Settings</Text>
          <Button title="Sign Out" onPress={() => navigation.navigate('Login')} />
          <TouchableOpacity
            onPress={handleEditProfile}
            style={getStyles(isDarkMode).flexColItem}
          >
            <Text style={getStyles(isDarkMode).settingItemText}>Edit profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleChangePassword}
            style={getStyles(isDarkMode).flexColItem}
          >
            <Text style={getStyles(isDarkMode).settingItemText}>Change password</Text>
          </TouchableOpacity>
          <ToggleItem
            label="Dark mode"
            onToggle={handleDarkModeToggle}
            value={isDarkMode}
            isDarkMode={isDarkMode}
          />
          <ToggleItem
            label="Push notifications"
            onToggle={handlePushNotificationsToggle}
            value={isPushNotifications}
            isDarkMode={isDarkMode}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const getStyles = (isDarkMode) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: isDarkMode ? COLORS.dark.black : COLORS.light.white,
  },
  scrollViewContainer: {
    alignItems: "center",
    width: "100%",
  },
  header: {
    padding: "5%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: isDarkMode ? COLORS.dark.green : COLORS.light.dark_green,
  },
  profileContainer: {
    width: "90%",
    alignItems: "center",
    marginBottom: 20,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    color: isDarkMode ? COLORS.dark.green : COLORS.light.dark_green,
    marginVertical: 8,
    textAlign: "center",
  },
  daysSavedContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: width * 0.5,
    width: width * 0.5,
    borderRadius: width * 0.25,
    backgroundColor: "#ffdd57",
    marginTop: 8,
  },
  profileImage: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: width * 0.25,
  },
  daysSavedText: {
    fontSize: 40,
    fontWeight: "bold",
    color: isDarkMode ? COLORS.dark.white : COLORS.light.white,
  },
  subtitle: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: "bold",
    color: isDarkMode ? COLORS.dark.white : COLORS.light.black,
    textAlign: "center",
  },
  settingsTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: isDarkMode ? COLORS.dark.green : COLORS.light.dark_green,
    marginTop: 20,
    marginBottom: 12,
    width: "90%",
    textAlign: "center",
  },
  settingsContainer: {
    width: "90%",
    alignItems: "center",
    shadowColor: isDarkMode ? COLORS.dark.white : COLORS.light.black,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2.5,
    elevation: 5,
    backgroundColor: isDarkMode ? COLORS.dark.black : COLORS.light.white,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20, // add margin to prevent overlap
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
  },
  settingIcon: {
    width: 40,
    height: 40,
  },
  settingItemText: {
    fontSize: 20,
    color: isDarkMode ? COLORS.dark.white : COLORS.light.black,
    marginLeft: 10,
    flex: 1,
  },
  sectionText: {
    marginTop: 20,
    fontSize: 18,
    color: isDarkMode ? COLORS.dark.grey : COLORS.light.grey,
    width: "100%",
    marginLeft: 10,
  },
  flexCol: {
    width: "100%",
  },
  flexColItem: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  toggleItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 10,
  },
  switch: {
    position: "relative",
    width: 60,
    height: 32,
    backgroundColor: isDarkMode ? COLORS.dark.grey : COLORS.light.grey,
    borderRadius: 34 / 2,
    padding: 2,
  },
  switchOn: {
    backgroundColor: isDarkMode ? COLORS.dark.blue : COLORS.light.blue,
  },
  switchOff: {
    backgroundColor: isDarkMode ? COLORS.dark.grey : COLORS.light.grey,
  },
  slider: {
    position: "absolute",
    top: 1,
    left: 1,
    width: 30,
    height: 30,
    backgroundColor: isDarkMode ? COLORS.dark.white : COLORS.light.white,
    borderRadius: 15,
    transition: ".4s",
  },
  sliderOn: {
    transform: [{ translateX: 26 }],
  },
  sliderOff: {
    transform: [{ translateX: 0 }],
  },
});

export default Account;
