import { StatusBar } from "expo-status-bar";
import React, { useCallback, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "../BottomSheet";
import { AntDesign } from "@expo/vector-icons";

export default function Intro() {
  const ref = useRef(null);

  const onPress = useCallback(() => {
    const isActive = ref.current?.isActive();
    if (isActive) {
      ref.current?.scrollTo(0);
    } else {
      ref.current?.scrollTo(-200);
    }
  }, []);

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        alignItems: "center",
        // justifyContent: "flex-end",
      }}>
      {/* <View style={styles.container}>
        <StatusBar style="dark" /> */}
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <AntDesign name="up" size={24} color="black" />
      </TouchableOpacity>
      <BottomSheet ref={ref}>
        <View style={{ flex: 1, backgroundColor: "purple" }} />
      </BottomSheet>
      {/* </View> */}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    // height: 50,
    // borderRadius: 25,
    // aspectRatio: 1,
    // backgroundColor: "pink",
    marginTop: 50,

    opacity: 0.6,
    flex: 0,
    justifyContent: "center",
    // alignSelf: "center",
    alignItems: "center",
  },
});
