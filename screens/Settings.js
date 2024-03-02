import React, { useState } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
  Switch,
} from "react-native";
import GlobalStyles from "../GlobalStyles";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={[styles.infoRow, { marginTop: 15 }]}>
          <Text style={styles.property}>Notifications</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#81b0ff" : "#f4f3f4"}
            // ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            // style={styles.value}
          />
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.property}>Language</Text>
          <MaterialIcons
            name="navigate-next"
            // size={24}
            style={styles.value}
          />
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.property}>Notice</Text>
          <MaterialIcons name="navigate-next" style={styles.value} />
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.property}>FAQs</Text>
          <MaterialIcons name="navigate-next" style={styles.value} />
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.property}>Terms of Use</Text>
          <MaterialIcons name="navigate-next" style={styles.value} />
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.property}>Privacy Policy</Text>
          <MaterialIcons name="navigate-next" style={styles.value} />
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.property}>Version</Text>
          <Text style={styles.value}>1.0.1</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.property}>Delete account</Text>
          <MaterialIcons name="navigate-next" style={styles.value} />
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.property}>Log out</Text>
          <MaterialIcons name="navigate-next" style={styles.value} />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    // backgroundColor: "pink",
    backgroundColor: "white",
    width: "100%",
  },
  profilePicture: {
    marginTop: 30,
    alignSelf: "center",
    width: 100,
    height: 100,
    borderRadius: 75,
    marginBottom: 15,
  },
  name: {
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  infoContainer: {
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  property: {
    flex: 1,
    fontSize: 16,
    marginRight: 10,
  },
  value: {
    flex: 1,
    fontSize: 16,
    textAlign: "right",
    color: "gray",
  },
  editButton: {
    // marginTop: 20,
    marginBottom: 30,
    borderRadius: 20,
    backgroundColor: "#8C52FF",
    paddingVertical: 16,
  },
  editProfileText: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
  },
});

export default Settings;
