import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const Intro = () => {
  return (
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require("../assets/usap-logo.png")} />
    </View>
  );
};
export default Intro;

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 200,
    width: 200,
  },
});
