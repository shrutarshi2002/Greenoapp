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

export default function SignUp({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();

  const handleSignUp = async () => {
    if (!name || !email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    try {
      const result = await signup(email, password, name);
      if (result.success) {
        console.log("User created successfully:", email);
        Alert.alert("Success", "Account created successfully!", [
          {
            text: "OK",
            onPress: () => navigation.navigate("Dashboard", { name: name }),
          },
        ]);
      } else {
        Alert.alert(
          "Sign Up Error",
          result.error || "An error occurred during sign up"
        );
      }
    } catch (error) {
      console.error("Sign up error:", error);
      Alert.alert("Sign Up Error", "An error occurred during sign up");
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
      <Text style={styles.title}>Create Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
        editable={!loading}
      />
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
        placeholder="Password (min 6 characters)"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        editable={!loading}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#4CAF50" style={styles.loader} />
      ) : (
        <Button title="Sign Up" onPress={handleSignUp} color="#4CAF50" />
      )}
      <Button
        title="Already have an account? Sign In"
        onPress={() => navigation.navigate("SignIn")}
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
