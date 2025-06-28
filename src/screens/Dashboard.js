import React from "react";
import { View, Text, Button, StyleSheet, Image, Alert } from "react-native";
import { useAuth } from "../contexts/AuthContext";

export default function Dashboard({ navigation }) {
  const { user, logout } = useAuth();

  const handleSignOut = async () => {
    try {
      await logout();
      Alert.alert("Success", "Signed out successfully");
    } catch (error) {
      console.error("Sign out error:", error);
      Alert.alert("Error", "Failed to sign out");
    }
  };

  // Get display name from user object or fallback to email
  const displayName = user?.displayName || user?.email?.split("@")[0] || "User";

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo.jpeg")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Welcome, {displayName}!</Text>
      <Text style={styles.subtitle}>Your Green Score: 100</Text>
      <Text style={styles.emailText}>{user?.email}</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Donate Now"
          onPress={() => navigation.navigate("DonationForm")}
          color="#4CAF50"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="View Points"
          onPress={() => navigation.navigate("Points")}
          color="#FF9800"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Sign Out" onPress={handleSignOut} color="#F44336" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  logo: {
    width: 120,
    height: 120,
    marginTop: 30,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2E7D32",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    color: "#4CAF50",
  },
  emailText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 30,
    fontStyle: "italic",
  },
  buttonContainer: {
    marginVertical: 10,
    width: "100%",
  },
});
