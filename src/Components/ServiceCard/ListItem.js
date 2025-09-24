import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { windowWidth } from "../ServiceGrid";

const ListItem = ({ image, title, description, price, duration, onAdd }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
        <View style={styles.row}>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.dot}> • </Text>
          <Text style={styles.duration}>{duration}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={onAdd}>
        <Text style={styles.addText}>＋ ADD</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: windowWidth / 1.5,
    marginVertical: 5,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.05)",
  },
  content: {
    flex: 1,
  },
  title: {
    flex: 1,
    fontSize: 10,
    fontWeight: "400",
    color: "#5A2E8F",
    marginBottom: 4,
  },
  description: {
    fontSize: 8,
    fontWeight: "400",
    color: "#444",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 8,
    fontWeight: "400",
    color: "#000",
  },
  dot: {
    fontSize: 14,
    color: "#444",
  },
  duration: {
    fontSize: 8,
    fontWeight: "400",
    color: "#444",
  },
  addButton: {
    borderWidth: 1,
    borderColor: "#5A2E8F",
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    alignSelf: "flex-end",
  },
  addText: {
    color: "#5A2E8F",
    fontWeight: "500",
    fontSize: 8,
  },
});

export default ListItem;
