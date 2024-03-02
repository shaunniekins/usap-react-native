import React, { useRef } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  PanResponder,
  Animated,
} from "react-native";

const Chat = ({ navigation }) => {
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        // Check if the user is swiping down
        if (gestureState.dy > 0) {
          // Set a threshold value to trigger the navigation
          if (gestureState.dy > 50) {
            // You can adjust the threshold value as per your requirement
            navigation.goBack();
          }
        }
      },
      onPanResponderRelease: () => {},
      onPanResponderTerminate: () => {},
    })
  ).current;

  return (
    <View style={styles.container}>
      {/* <View style={styles.container} {...panResponder.panHandlers}> */}
      <ScrollView style={styles.convoContainer}>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
        <Text>Wassup</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  convoContainer: {
    flex: 1,
    backgroundColor: "white",
    // paddingBottom: 90,
    paddingHorizontal: 20,
  },
});

export default Chat;
