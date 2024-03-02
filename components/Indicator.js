import React, { useEffect, useRef, useState } from "react";
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
  const [isFound, setIsFound] = useState(true);
  const [isOn, setIsOn] = useState(false);

  const handleIsFound = () => {
    setIsFound(!isFound);
  };

  const handleIsOn = () => {
    setIsOn(!isOn);
  };

  // Use a ref to keep track of the interval ID
  // const intervalRef = useRef(null);

  // useEffect(() => {
  //   if (isOn && isFound) {
  //     // Start the interval when isOn and isFound are true
  //     intervalRef.current = setInterval(() => {
  //       setPulse((prev) => [...prev, Math.random()]);
  //     }, 5000);
  //   } else {
  //     // Clear the interval when isOn or isFound becomes false
  //     clearInterval(intervalRef.current);
  //   }

  //   // Clean up the interval when the component unmounts or when isOn/isFound changes
  //   return () => clearInterval(intervalRef.current);
  // }, [isOn, isFound]);

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
      {...(isOn && isFound ? panResponder.panHandlers : {})}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Pressable style={styles.innerCircle} onPress={handleIsOn}>
          <MaterialCommunityIcons
            name={isOn ? "heart-circle-outline" : "heart-circle"}
            size={70}
            color="#8C52FF"
          />
        </Pressable>
        {isOn &&
          pulse.map((item, index) => (
            <Pulse key={index} repeat={index === 0} />
          ))}
      </View>
      {isOn && isFound ? (
        <AntDesign
          name="up"
          onPress={() => navigation.navigate("Chat")}
          style={styles.arrowUp}
        />
      ) : isOn ? (
        <SearchingText />
      ) : (
        <Text style={styles.tap}>Tap Heart to start</Text>
      )}
      {/* {isOn ? (
        <Button
          title={isFound ? "Not Found" : "Found"}
          // style={styles.lowerPart}
          onPress={handleIsFound}
        />
      ) : null} */}
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
    flex: 1,
    width: 500,
    height: 500,
    borderRadius: 600 / 2,
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
  tap: {
    marginTop: 200,
    fontSize: 18,
    textAlign: "center",
    color: "lightgray",
  },
  search: {
    // bottom: 0,
    // position: "fixed",
    // backgroundColor: "skyblue",
    marginTop: 250,
    // padding: 20,
    // marginHorizontal: 150,
    // borderRadius: 600 / 2,
    fontSize: 18,
    textAlign: "center",
    color: "gray",
  },
  arrowUp: {
    // bottom: 0,
    // position: "fixed",
    // backgroundColor: "skyblue",
    marginTop: 250,
    padding: 20,
    marginHorizontal: 150,
    borderRadius: 600 / 2,
    fontSize: 18,
    textAlign: "center",
    color: "gray",
  },
});
