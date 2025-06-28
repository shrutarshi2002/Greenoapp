import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const donationHistory = [
  { id: "1", item: "Plastic", quantity: "5kg", date: "2025-06-01", points: 50 },
  { id: "2", item: "Glass", quantity: "3kg", date: "2025-05-28", points: 30 },
  {
    id: "3",
    item: "Aluminum",
    quantity: "2kg",
    date: "2025-05-25",
    points: 20,
  },
];

export default function Points() {
  const totalPoints = donationHistory.reduce(
    (sum, item) => sum + item.points,
    100
  ); // 100 base points

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Green Points</Text>
      <Text style={styles.totalPoints}>{totalPoints} pts</Text>

      <Text style={styles.subtitle}>Donation History</Text>
      <FlatList
        data={donationHistory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.donationItem}>
            <Text style={styles.itemText}>
              {item.item} ({item.quantity})
            </Text>
            <Text style={styles.itemDate}>{item.date}</Text>
            <Text style={styles.itemPoints}>+{item.points} pts</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  totalPoints: { fontSize: 32, color: "#4CAF50", marginBottom: 30 },
  subtitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  donationItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  itemText: { flex: 2 },
  itemDate: { flex: 1, textAlign: "center" },
  itemPoints: { flex: 1, textAlign: "right", color: "#4CAF50" },
});
