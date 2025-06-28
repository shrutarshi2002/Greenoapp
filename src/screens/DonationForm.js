import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Switch,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import ItemPicker from "../components/ItemPicker";

export default function DonationForm({ navigation }) {
  const [item, setItem] = useState("Plastic");
  const [quantity, setQuantity] = useState("");
  const [isPickUp, setIsPickUp] = useState(false);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    if (!quantity || isNaN(quantity)) {
      alert("Please enter a valid quantity");
      return;
    }
    navigation.navigate("Confirmation", { item, quantity });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Item Type:</Text>
      <ItemPicker selectedItem={item} onSelect={setItem} />

      <Text style={styles.label}>Quantity (kg):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter quantity"
        value={quantity}
        onChangeText={setQuantity}
      />

      <View style={styles.switchContainer}>
        <Text>Pick Up Service?</Text>
        <Switch
          value={isPickUp}
          onValueChange={setIsPickUp}
          thumbColor={isPickUp ? "#4CAF50" : "#f4f3f4"}
        />
      </View>

      {isPickUp && (
        <>
          <Text style={styles.label}>Home Address:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your address"
            value={address}
            onChangeText={setAddress}
          />

          <Text style={styles.label}>Phone Number:</Text>
          <TextInput
            style={styles.input}
            placeholder="+971 XX XXXXXXX"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </>
      )}

      <Button title="Submit Donation" onPress={handleSubmit} color="#4CAF50" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { marginTop: 15, marginBottom: 5, fontWeight: "bold" },
  input: {
    height: 40,
    borderColor: "#81C784",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 15,
  },
});
