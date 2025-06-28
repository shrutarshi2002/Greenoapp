import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Confirmation({ route, navigation }) {
  const { item, quantity } = route.params;
  const carbonSaved = quantity * 2.5; // Example calculation (2.5kg CO2 per kg recycled)

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thank You!</Text>
      <Text style={styles.text}>
        Your {item} donation of {quantity}kg has been scheduled.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Environmental Impact</Text>
        <Text style={styles.cardText}>You've saved approximately:</Text>
        <Text style={styles.carbonText}>{carbonSaved.toFixed(1)} kg CO₂</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Schedule Another Donation"
          onPress={() => navigation.navigate("DonationForm")}
          color="#4CAF50"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Back to Dashboard"
          onPress={() => navigation.navigate("Dashboard")}
          color="#FF9800"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  text: { fontSize: 16, marginBottom: 30, textAlign: "center" },
  card: {
    backgroundColor: "#E8F5E9",
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    alignItems: "center",
  },
  cardTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  cardText: { marginBottom: 5 },
  carbonText: { fontSize: 24, color: "#4CAF50", fontWeight: "bold" },
  buttonContainer: { marginVertical: 10 },
});
