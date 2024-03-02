import React, { useEffect, useRef } from "react";
import { View, Animated, Easing } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

const Chat = () => {
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    rotateAnimation();

    // return () => rotateAnimation.stop();
  }, []);

  const rotateAnimation = () => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
        }}>
        <Animated.View
          style={{
            backgroundColor: "gray",
            width: 235,
            height: 235,
            borderRadius: 200,
            borderColor: "gray",
            transform: [{ rotate: spin }],
            overflow: "hidden",
          }}>
          <LinearGradient
            colors={["orchid", "purple"]}
            style={styles.gradientStyle}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}>
            <View style={{ flex: 1 }} />
          </LinearGradient>
        </Animated.View>
        <View
          style={{
            width: 200,
            height: 200,
            borderRadius: 200,
            backgroundColor: "white",
            position: "absolute",
          }}></View>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
        }}>
        <Animated.View
          style={{
            backgroundColor: "gray",
            width: 175,
            height: 175,
            borderRadius: 100,
            borderColor: "gray",
            transform: [{ rotate: spin }],
            overflow: "hidden",
          }}>
          <LinearGradient
            // colors={["white", "purple"]}
            colors={["orchid", "purple"]}
            style={styles.gradientStyle}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}>
            <View style={{ flex: 1 }} />
          </LinearGradient>
        </Animated.View>
        <View
          style={{
            width: 140,
            height: 140,
            borderRadius: 100,
            backgroundColor: "white",
            position: "absolute",
          }}></View>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
        }}>
        <Animated.View
          style={{
            backgroundColor: "gray",
            width: 115,
            height: 115,
            borderRadius: 100,
            borderColor: "gray",
            transform: [{ rotate: spin }],
            overflow: "hidden",
          }}>
          <LinearGradient
            // colors={["white", "purple"]}
            colors={["orchid", "purple"]}
            style={styles.gradientStyle}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}>
            <View style={{ flex: 1 }} />
          </LinearGradient>
        </Animated.View>
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 100,
            backgroundColor: "white",
            position: "absolute",
          }}></View>
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  gradientStyle: {
    flex: 1,
    borderRadius: 50,
    overflow: "hidden",
  },
});
