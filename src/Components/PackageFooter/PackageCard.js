import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { windowWidth } from "../ServiceGrid";

const PackageCard = ({
  title,
  rating,
  services,
  price,
  duration,
  onAdd,
  onEdit,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={{ margin: 5, flex: 1 }}>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{rating}</Text>
          <TouchableOpacity style={styles.addButton} onPress={onAdd}>
            <Text style={styles.addButtonText}>+ ADD</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.services}>
          {services.map((service, index) => (
            <Text key={index} style={styles.serviceText}>
              • {service}
            </Text>
          ))}
          <TouchableOpacity onPress={onEdit} style={styles.buttons}>
            <Text style={styles.editButtonText}>Edit Your Package</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.price}>
            {price} • {duration}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    borderRadius: 10,
    // flex: 1,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginRight: 8,
    width: windowWidth / 1.5,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6C3C7A",
    height: 40,
  },
  title: {
    fontSize: 12,
    fontWeight: "500",
    color: "#FFF",
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  rating: {
    fontSize: 8,
    fontWeight: "500",
    color: "rgba(0, 0, 0, 0.29)",
    marginLeft: 5,
  },
  services: {
    backgroundColor: "rgba(153, 120, 138, 0.1)",
    marginTop: 10,
    // flex: 1,
  },
  serviceText: {
    fontSize: 14,
    // color: "#333",
    paddingVertical: 10,
    paddingHorizontal: 5,
    // flex: 1,
  },
  footer: {
    marginBottom: 10,
    marginHorizontal: 5,
    justifyContent: "flex-end",
    flexDirection: "row",
    marginVertical: 10,
  },
  price: {
    fontSize: 8,
    fontWeight: "400",
    color: "black",
    alignSelf: "flex-end",
    marginRight: 5,
  },
  buttons: {
    marginLeft: 5,
    borderWidth: 1,
    alignSelf: "flex-start",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "rgba(0, 0, 0, 0.29)",
    backgroundColor: "white",
    padding: 5,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#6C3C7A",
  },
  addButtonText: {
    color: "#6C3C7A",
    fontSize: 12,
  },
  editButtonText: {
    color: "rgba(0, 0, 0, 0.49)",
    fontSize: 8,
    fontWeight: "500",
  },
});

export default PackageCard;
