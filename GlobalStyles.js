import { StyleSheet, Platform, StatusBar } from "react-native";
export default StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    // backgroundColor: "pink",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
