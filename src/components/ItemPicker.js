import React from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const items = [
  "Plastic",
  "Glass",
  "Aluminum Cans",
  "Old Mobiles",
  "Waste Paper",
];

export default function ItemPicker({ selectedItem, onSelect }) {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedItem}
        onValueChange={onSelect}
        style={styles.picker}
      >
        {items.map((item) => (
          <Picker.Item key={item} label={item} value={item} />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#81C784",
    borderRadius: 5,
    marginBottom: 15,
  },
  picker: {
    height: 50,
    width: "100%",
  },
});
