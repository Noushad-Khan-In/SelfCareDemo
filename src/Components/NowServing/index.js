import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ListItem from "./ListItem";

const GradientList = ({ list, title }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 15,
        }}
      >
        <Text style={styles.header}>{title}</Text>
        <Text
          style={{
            fontSize: 12,
            color: "rgba(108, 60, 122, 1)",
            fontWeight: "400",
            textDecorationLine: "underline",
          }}
        >
          View All
        </Text>
      </View>
      <FlatList
        data={list}
        renderItem={({ item, index }) => (
          <ListItem
            key={item.id}
            list={list}
            index={index}
            title={item.title}
            price={item.price}
            duration={item.duration}
            image={item.image}
            onAddToCart={item.onAddToCart}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 14,
    fontWeight: "500",
    color: "black",
  },
});

export default GradientList;
