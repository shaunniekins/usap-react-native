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
import { PanResponder } from "react-native";

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

const Indicator = ({ navigation }) => {
  const [pulse, setPulse] = useState([1]);
  const [isFound, setIsFound] = useState(false);

  const handleIsFound = () => {
    setIsFound(!isFound);
  };

  const handlePress = () => {
    setPulse((prev) => [...prev, Math.random()]);
    handleIsFound();
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderRelease: (e, gestureState) => {
      if (gestureState.dy < -50) {
        navigation.navigate("Chat");
      }
    },
  });

  return (
    <View
      style={styles.container}
      {...(isFound ? panResponder.panHandlers : {})}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Pressable style={styles.innerCircle} onPress={handlePress}>
          <MaterialCommunityIcons
            name={isFound ? "heart-circle" : "heart-circle-outline"}
            size={70}
            color="#8C52FF"
            // onPress={handleIsFound}
          />
        </Pressable>
        {pulse.map((item, index) => (
          <Pulse key={index} repeat={index === 0} />
        ))}
      </View>
      {isFound ? (
        <AntDesign
          name="up"
          // size={24}
          // color="gray"
          onPress={() => navigation.navigate("Chat")}
          style={styles.search}
        />
      ) : (
        <SearchingText />
      )}
    </View>
  );
};

export default Indicator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 280,
    backgroundColor: "white",
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
    marginTop: 180,
    // backgroundColor: "skyblue",
    fontSize: 18,
    textAlign: "center",
    color: "gray",
  },
});

// useEffect(() => {
//   if (isOn && isFound) {
//     setPulse((prev) => [...prev, Math.random()]);
//   }
// }, [isOn, isFound]);
