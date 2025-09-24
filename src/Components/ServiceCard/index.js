import React from "react";
import { FlatList, View } from "react-native";
import ListItem from "./ListItem";

const data = [
  {
    id: "1",
    image: require("../../assets/dummyImg2.png"),
    title: "Growth Rituals-Classic Facial",
    description: "Clean-up + Face massage + Glow pack",
    price: "₹1190",
    duration: "40 mins",
  },
  {
    id: "2",
    image: require("../../assets/dummyImg2.png"),
    title: "Premium Glow Facial",
    description: "Deep clean + Massage + Pack",
    price: "₹1490",
    duration: "50 mins",
  },
];

const ServicesList = () => {
  return (
    <View style={{ paddingVertical: 16 }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <ListItem
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
            duration={item.duration}
            onAdd={() => console.log(`Added ${item.title}`)}
          />
        )}
      />
    </View>
  );
};

export default ServicesList;
