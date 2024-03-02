import React, { useEffect, useRef } from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Animated,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
// import Svg, { Path } from "react-native-svg";

import GlobalStyles from "../GlobalStyles";

const Home = () => {
  const rotationAnimation = useRef(new Animated.Value(0)).current;
  const pulseAnimation = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    startRotation();
    startPulse();
  }, []);

  const startRotation = () => {
    Animated.loop(
      Animated.timing(rotationAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();
  };

  const startPulse = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnimation, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnimation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  const interpolateRotation = (outputRange) => {
    return rotationAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: outputRange,
    });
  };

  const interpolateSize = (outputRange) => {
    return rotationAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: outputRange,
    });
  };

  const interpolatePulse = (outputRange) => {
    return pulseAnimation.interpolate({
      inputRange: [1, 1.2],
      outputRange: outputRange,
    });
  };

  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <Text
        style={{ fontSize: 25, fontFamily: "Roboto", backgroundColor: "gray" }}>
        Usap
      </Text>
      <View style={styles.background}>
        <View style={styles.donutContainer}>
          <Animated.View
            style={[
              styles.heartShape,
              {
                transform: [
                  {
                    scale: interpolatePulse([1, 1.3]),
                  },
                  {
                    scaleX: interpolateSize([0.25, 0.5]),
                  },
                  {
                    scaleY: interpolateSize([0.25, 0.5]),
                  },
                ],
              },
            ]}
          />
          <Animated.View
            style={[
              styles.donutShape,
              {
                transform: [
                  {
                    scale: interpolatePulse([1, 1.3]),
                  },
                  {
                    scaleX: interpolateSize([0.5, 1]),
                  },
                  {
                    scaleY: interpolateSize([0.5, 1]),
                  },
                ],
              },
            ]}
          />
          <Animated.View
            style={[
              styles.donutShape,
              {
                transform: [
                  {
                    scale: interpolatePulse([1, 1.3]),
                  },
                  {
                    scaleX: interpolateSize([0.5, 1]),
                  },
                  {
                    scaleY: interpolateSize([0.5, 1]),
                  },
                ],
              },
            ]}
          />
          <Animated.View
            style={[
              styles.donutShape,
              {
                transform: [
                  {
                    scale: interpolatePulse([1, 1.3]),
                  },
                  {
                    scaleX: interpolateSize([1, 1.5]),
                  },
                  {
                    scaleY: interpolateSize([1, 1.5]),
                  },
                ],
              },
            ]}
          />
          <Animated.View
            style={[
              styles.donutShape,
              {
                transform: [
                  {
                    scale: interpolatePulse([1, 1.3]),
                  },
                  {
                    scaleX: interpolateSize([1.5, 2.1]),
                  },
                  {
                    scaleY: interpolateSize([1.5, 2.1]),
                  },
                ],
              },
            ]}
          />
        </View>
        <TouchableHighlight
          style={styles.searchButton}
          onPress={() => {
            // Handle button press
          }}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "gray",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  heartShape: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "white",
    // borderWidth: 8,
    // borderColor: "white",
    position: "absolute",
    // transform: [{ rotate: "-45deg" }],
  },
  donutShape: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 8,
    borderColor: "white",
    position: "absolute",
    // transform: [{ rotate: "-45deg" }],
  },
  donutContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchButton: {
    borderRadius: 100,
    // borderWidth: 10,
    backgroundColor: "purple",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
