import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import Chat from "./screens/Chat";
import Profile from "./screens/Profile";
import Settings from "./screens/Settings";
import Validation from "./screens/Validation";
import {
  Image,
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native";

const Stack = createNativeStackNavigator();

const LogoTitle = ({ navigation }) => {
  return (
    <View style={styles.background}>
      <TouchableWithoutFeedback onPress={() => navigation.push("Profile")}>
        <AntDesign name="user" size={30} color="black" />
      </TouchableWithoutFeedback>
      <Image
        style={styles.logo}
        source={require("./assets/usap-with-name-logo.png")}
      />
      <AntDesign name="filter" size={30} color="black" />
    </View>
  );
};

const ChatTitle = ({ navigation }) => {
  return (
    <View>
      <TouchableWithoutFeedback onPress={navigation.goBack}>
        <AntDesign name="down" size={18} color="gray" />
      </TouchableWithoutFeedback>
    </View>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Validation"
          component={Validation}
          options={{
            headerTitleAlign: "center",
            headerShown: false,
            statusBarStyle: "dark",
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            headerTitle: (props) => (
              <LogoTitle {...props} navigation={navigation} />
            ),
            headerStyle: {
              backgroundColor: "white",
            },
            statusBarStyle: "dark",
            // statusBarColor: "black",
            headerBackVisible: false,
            headerShadowVisible: false,
            headerTitleAlign: "center",
          })}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={({ navigation }) => ({
            headerTitle: (props) => (
              <ChatTitle {...props} navigation={navigation} />
            ),
            headerBackVisible: false,
            headerShadowVisible: false,
            headerTitleAlign: "center",
            statusBarColor: "#5E17EB",
            statusBarStyle: "light",
            animation: "slide_from_bottom",
          })}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={({ navigation }) => ({
            headerTitleAlign: "center",
            // animationTypeForReplace: "pop",
            animation: "slide_from_left",
            statusBarStyle: "dark",
            // headerBackVisible: false,
            headerRight: () => (
              <>
                <Ionicons
                  name="settings-outline"
                  size={24}
                  color="black"
                  onPress={() => navigation.navigate("Settings")}
                />
              </>
            ),
          })}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

{
  /* {showWelcomeScreen ? <WelcomeScreen /> : <Home />}
      <StatusBar style="auto" /> */
}

const styles = StyleSheet.create({
  background: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // alignItems: "center",
    // backgroundColor: "#ecf0f1",
    // backgroundColor: "white",
    // paddingHorizontal: 30,
    gap: 70,
    // paddingTop: 20,
    paddingVertical: 25,
  },
  logo: {
    height: 45,
    width: 100,
  },
  button: {
    alignItems: "center",
  },
});
