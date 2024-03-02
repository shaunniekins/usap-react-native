import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import React from "react";

import Indicator from "../components/Indicator";

const HomeWork = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Indicator navigation={navigation} />
    </View>
  );
};

export default HomeWork;
