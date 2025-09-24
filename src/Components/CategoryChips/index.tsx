import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

const categories = ["Facial", "Hair", "Color", "Wax", "Pedicure & Manicure"];

const CategoryChips = () => {
  return (
    <View style={{ marginBottom: 16, marginTop: 4 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((item, index) => (
          <TouchableOpacity key={index} style={styles.chip}>
            <Text style={styles.chipText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  chip: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 20,
    paddingVertical: 3,
    paddingHorizontal: 10,
    marginRight: 8,
    backgroundColor: "#fff",
  },
  chipText: {
    fontSize: 10,
    fontWeight: "400",
    color: "#000",
  },
});

export default CategoryChips;
