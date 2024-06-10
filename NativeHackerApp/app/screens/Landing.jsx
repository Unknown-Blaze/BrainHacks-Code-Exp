import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../constants/colors";
import Button from "../general components/Button";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "./ThemeProvider";

const Landing = () => {
  const { isDarkMode } = useTheme();
  const styles = getStyles(isDarkMode);
  const navigation = useNavigation();
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[COLORS.green, COLORS.dark_green]}
    >
      <View style={{ flex: 1 }}>
        <View>
          <Image
            source={require("../../assets/adaptive-icon.png")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: "absolute",
              top: 10,
              transform: [
                { translateX: 20 },
                { translateY: 50 },
                { rotate: "-15deg" },
              ],
            }}
          />

          <Image
            source={require("../../assets/adaptive-icon.png")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: "absolute",
              top: -30,
              left: 100,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "-5deg" },
              ],
            }}
          />

          <Image
            source={require("../../assets/adaptive-icon.png")}
            style={{
              width: 100,
              height: 100,
              borderRadius: 20,
              position: "absolute",
              top: 130,
              left: -50,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "15deg" },
              ],
            }}
          />

          <Image
            source={require("../../assets/adaptive-icon.png")}
            style={{
              height: 200,
              width: 200,
              borderRadius: 20,
              position: "absolute",
              top: 110,
              left: 100,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "-15deg" },
              ],
            }}
          />
        </View>

        {/* content  */}

        <View
          style={{
            paddingHorizontal: 22,
            position: "absolute",
            top: 400,
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 50,
              fontWeight: 800,
              color: isDarkMode ? COLORS.dark.white : COLORS.light.white,
            }}
          >
            Let's Get
          </Text>
          <Text
            style={{
              fontSize: 46,
              fontWeight: 800,
              color: isDarkMode ? COLORS.dark.white : COLORS.light.white,
            }}
          >
            Started
          </Text>

          <View style={{ marginVertical: 22 }}>
            {/* <Text style={{
                            fontSize: 16,
                            color: isDarkMode ? COLORS.dark.white : COLORS.light.white,
                            marginVertical: 4
                        }}>Connect with each other with chatting</Text>
                        <Text style={{
                            fontSize: 16,
                            color: isDarkMode ? COLORS.dark.white : COLORS.light.white,
                        }}>Calling, Enjoy Safe and private texting</Text> */}
          </View>

          <Button
            title="Join Now"
            onPress={() => navigation.navigate("Signup")}
            style={{
              marginTop: 22,
              width: "100%",
            }}
          />

          <View
            style={{
              flexDirection: "row",
              marginTop: 12,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: isDarkMode ? COLORS.dark.white : COLORS.light.white,
              }}
            >
              Already have an account ?
            </Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  fontSize: 16,
                  color: isDarkMode ? COLORS.dark.white : COLORS.light.white,
                  fontWeight: "bold",
                  marginLeft: 4,
                }}
              >
                Login
              </Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Home")}>
              <Text
                style={{
                  fontSize: 16,
                  color: isDarkMode ? COLORS.dark.white : COLORS.light.white,
                  fontWeight: "bold",
                  marginLeft: 4,
                }}
              >
                Home
              </Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("Itenary")}>
              <Text
                style={{
                  fontSize: 16,
                  color: isDarkMode ? COLORS.dark.white : COLORS.light.white,
                  fontWeight: "bold",
                  marginLeft: 4,
                }}
              >
                Itenary
              </Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Maps")}>
              <Text
                style={{
                  fontSize: 16,
                  color: isDarkMode ? COLORS.dark.white : COLORS.light.white,
                  fontWeight: "bold",
                  marginLeft: 4,
                }}
              >
                Maps
              </Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Account")}>
              <Text
                style={{
                  fontSize: 16,
                  color: isDarkMode ? COLORS.dark.white : COLORS.light.white,
                  fontWeight: "bold",
                  marginLeft: 4,
                }}
              >
                Account
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Landing;
