import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Text,
  ActivityIndicator,
  Image,
} from "react-native";
import { useAuth } from "../contexts/AuthContext";

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      const result = await login(email, password);
      if (result.success) {
        console.log("Signed in user:", email);
        navigation.navigate("Dashboard", { name: email.split("@")[0] });
      } else {
        Alert.alert(
          "Sign In Error",
          result.error || "An error occurred during sign in"
        );
      }
    } catch (error) {
      console.error("Sign in error:", error);
      Alert.alert("Sign In Error", "An error occurred during sign in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo.jpeg")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        editable={!loading}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        editable={!loading}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#4CAF50" style={styles.loader} />
      ) : (
        <Button title="Sign In" onPress={handleSignIn} color="#4CAF50" />
      )}
      <Button
        title="Don't have an account? Sign Up"
        onPress={() => navigation.navigate("SignUp")}
        color="#81C784"
        style={styles.linkButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#2E7D32",
  },
  input: {
    height: 50,
    borderColor: "#81C784",
    borderWidth: 1,
    marginBottom: 20,
    padding: 15,
    borderRadius: 8,
    backgroundColor: "white",
    fontSize: 16,
  },
  loader: {
    marginVertical: 20,
  },
  linkButton: {
    marginTop: 20,
  },
});
