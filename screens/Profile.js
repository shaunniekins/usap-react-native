import React, { useState } from "react";
import {
  View,
  Modal,
  ScrollView,
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Pressable,
} from "react-native";
import GlobalStyles from "../GlobalStyles";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

// import profileData from "../data/profileData.json";
import profileData from "../data/profileData";

const Profile = () => {
  const [profileInfo, setProfileInfo] = useState(profileData.profileData);
  const [isEditable, setIsEditable] = useState(false);
  const [text, onChangeText] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sequi dolore impedit eaque totam."
  );
  const [modalVisible, setModalVisible] = useState(false);

  const characterCount = text.length;
  const maxCharacterLimit = 100;
  const characterIndicator = `${characterCount}/${maxCharacterLimit}`;

  return (
    <ScrollView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Image
        source={require("../assets/shaun.jpg")}
        style={styles.profilePicture}
      />
      <Text style={styles.name}>Shaun Niel Ochavo</Text>
      <View style={styles.infoContainer}>
        {isEditable ? (
          <>
            <View style={{ flex: 1 }}>
              <TextInput
                multiline={true}
                numberOfLines={10}
                maxLength={100}
                contextMenuHidden={true}
                style={{
                  textAlign: "justify",
                  marginBottom: 30,
                  fontSize: 16,
                  lineHeight: 25,
                  textAlignVertical: "top",
                  height: 80,
                  borderWidth: 1,
                  borderColor: "gray",
                  padding: 5,
                  borderRadius: 5,
                  flexWrap: "wrap",
                }}
                onChangeText={onChangeText}
                defaultValue={text}
                placeholder="useless placeholder"
                keyboardType="default"
              />
              <Text
                style={{
                  position: "absolute",
                  bottom: 35,
                  right: 10,
                  color: "gray",
                }}>
                {characterIndicator}
              </Text>
            </View>
          </>
        ) : (
          <Text
            style={{
              textAlign: "justify",
              marginBottom: 30,
              fontSize: 16,
              lineHeight: 25,
            }}>
            {text}
          </Text>
        )}
        {/* <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable> */}

        {/* {profileInfo.map(({ property, value }) => ( */}
        <View style={styles.infoRow}>
          {/* <Text style={styles.property}>{property}</Text> */}
          <View style={styles.valueContainer}>
            {isEditable ? (
              <Pressable onPress={() => setModalVisible(true)}>
                <Text style={styles.valueText}>{value}</Text>
              </Pressable>
            ) : (
              // <Text style={styles.valueText}>{value}</Text>
              ""
            )}
            {isEditable ? (
              <Pressable
                // style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <MaterialIcons name="navigate-next" style={styles.valueIcon} />
              </Pressable>
            ) : (
              <View />
            )}
          </View>
        </View>
        {/* ))} */}
        <TouchableHighlight
          style={styles.editButton}
          onPress={() => setIsEditable(!isEditable)}
          underlayColor="#fff">
          <Text style={[styles.editProfileText]}>
            {isEditable ? "Save" : "Edit Profile"}
          </Text>
        </TouchableHighlight>
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
  // characterIndicator: {
  //   position: "absolute",
  //   alignSelf: "flex-end",
  //   marginRight: 10,
  //   marginBottom: 10,
  //   color: "gray",
  // },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  property: {
    flex: 1,
    fontSize: 16,
    marginRight: 10,
    flexWrap: "wrap",
  },
  valueContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "flex-end",
    alignItems: "center",
    textAlign: "right",
  },
  valueText: {
    fontSize: 16,
    color: "#8C52FF",
    fontWeight: 700,
  },
  valueIcon: {
    fontSize: 16,
    color: "gray",
    backfaceVisibility: "hidden",
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  // buttonOpen: {
  //   backgroundColor: "#F194FF",
  // },

  buttonClose: {
    backgroundColor: "#2196F3",
    marginTop: 10,
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Profile;
