import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Button, Image, Pressable } from "react-native";
import Constants from "expo-constants";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  Extrapolate,
  withRepeat,
  withDelay,
  Easing,
} from "react-native-reanimated";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Pulse = ({ delay = 0, repeat }) => {
  const animation = useSharedValue(0);
  useEffect(() => {
    animation.value = withDelay(
      delay,
      withRepeat(
        withTiming(1, {
          duration: 1000,
          easing: Easing.linear,
        }),
        repeat ? -1 : 1,
        false
      )
    );
  }, []);
  const animatedStyles = useAnimatedStyle(() => {
    const opacity = interpolate(
      animation.value,
      [0, 1],
      [0.6, 0],
      Extrapolate.CLAMP
    );
    return {
      opacity: opacity,
      transform: [{ scale: animation.value }],
    };
  });
  return <Animated.View style={[styles.circle, animatedStyles]} />;
};

const SearchingText = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots === "...") {
          return "";
        } else {
          return prevDots + ".";
        }
      });
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <Text style={styles.search}>Searching{dots}</Text>;
};

export default function Indicator() {
  const [pulse, setPulse] = useState([1]);

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Pressable
          style={styles.innerCircle}
          onPress={() => {
            setPulse((prev) => [...prev, Math.random()]);
          }}>
          <MaterialCommunityIcons
            name="heart-circle-outline"
            size={70}
            color="#8C52FF"
          />
        </Pressable>
        {pulse.map((item, index) => (
          <Pulse key={index} repeat={index === 0} />
        ))}
      </View>
      <SearchingText />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 280,
    zIndex: -1,
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    position: "absolute",
    borderColor: "#5E17EB",
    borderWidth: 4,
    backgroundColor: "#5E17EB",
  },
  innerCircle: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    alignContent: "center",
    width: 80,
    height: 80,
    borderRadius: 40,
    zIndex: 100,
    position: "absolute",
  },
  search: {
    // flex: 0,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 180,
    // paddingBottom: 10,
    // marginBottom: 5,
    // backgroundColor: "skyblue",
    paddingHorizontal: 10,
    fontSize: 18,
    textAlign: "center",
    color: "gray",
  },
});
