import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/logo.jpeg")} // Make sure your logo is at assets/logo.jpeg
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.title}>Welcome to Greeno!</Text>
        <Text style={styles.subtitle}>Start your green journey today.</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Sign Up"
            onPress={() => navigation.navigate("SignUp")}
            color="#4CAF50"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Sign In"
            onPress={() => navigation.navigate("SignIn")}
            color="#FF9800"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
  },
  contentContainer: {
    alignItems: "center",
    marginTop: 60, // Push content down from center
  },
  logoContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
  },
  logo: {
    width: 120,
    height: 120,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2E7D32",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 40,
    color: "#4CAF50",
    textAlign: "center",
  },
  buttonContainer: {
    marginVertical: 10,
    width: "100%",
  },
});
