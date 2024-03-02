import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import GlobalStyles from "../GlobalStyles";

const Validation = () => {
  const handleGoogleSignIn = () => {
    // Implement your Google Sign-In logic here
    // alert("Sign in with Google clicked");
  };

  const handleFacebookSignIn = () => {
    // Implement your Facebook Sign-In logic here
    alert("Sign in with Facebook clicked");
  };
  return (
    <View style={styles.buttonContainer}>
      <Image style={styles.logo} source={require("../assets/usap-logo.png")} />
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <Text style={styles.slogan}>{`Tara `}</Text>
        <Text style={[styles.slogan, { fontStyle: "italic" }]}>{`usap!`}</Text>
      </View>
      <TouchableOpacity
        style={[styles.signInButton, styles.googleButton]}
        onPress={handleGoogleSignIn}>
        <Image
          style={styles.buttonLogo}
          source={require("../assets/google.png")}
        />
        <Text style={styles.googleText}>Sign in with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.signInButton, styles.facebookButton]}
        onPress={handleFacebookSignIn}>
        <Image
          style={[
            styles.buttonLogo,
            {
              tintColor: "white",
            },
          ]}
          source={require("../assets/facebook2.png")}
        />
        <Text style={styles.facebookText}>Sign in with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.signInButton, styles.appleButton]}
        onPress={handleFacebookSignIn}>
        <Image
          style={[
            styles.buttonLogo,
            {
              tintColor: "white",
            },
          ]}
          source={require("../assets/apple.png")}
        />
        <Text style={styles.facebookText}>Sign in with Apple</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Validation;

const styles = StyleSheet.create({
  // logoContainer: {
  //   flex: 0,
  //   alignItems: "center",
  //   backgroundColor: "white",
  //   paddingTop: 100,
  // },
  logo: {
    alignSelf: "center",
    height: 200,
    width: 200,
    // backgroundColor: "blue",
  },
  slogan: {
    marginTop: -30,
    marginBottom: 250,
    fontSize: 18,
    alignSelf: "center",
    // fontFamily: "Quicksand-Bold, Arial",
  },
  buttonContainer: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  signInButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginBottom: 16,
    // width: 250,
    gap: 20,
    elevation: 5,
    shadowColor: "gray",
  },
  googleButton: {
    backgroundColor: "#ffffff",
  },
  facebookButton: {
    backgroundColor: "#1976D2",
    // backgroundColor: "#8C52FF",
  },
  appleButton: {
    backgroundColor: "black",
  },
  googleText: {
    color: "black",
    fontSize: 16,
    marginLeft: 25,
    // paddingLeft: 20,
  },
  facebookText: {
    color: "white",
    fontSize: 16,
    marginLeft: 25,
    // paddingLeft: 20,
  },
  buttonLogo: {
    marginLeft: 15,
    width: 25,
    height: 25,
  },
});
