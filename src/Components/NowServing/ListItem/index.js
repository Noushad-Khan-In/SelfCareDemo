import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { windowWidth } from "../../ServiceGrid";

const ListItem = ({
  title,
  price,
  duration,
  onAddToCart,
  image,
  index,
  list,
}) => {
  return (
    <ImageBackground
      style={[
        styles.outerCard,
        index !== list?.length - 1 ? { marginRight: 16 } : {},
      ]}
      source={image}
      resizeMode={"contain"}
    >
      <ImageBackground
        style={[styles.innerCard]}
        source={require("../../../assets/gradientBG.png")}
      >
        <View style={styles.textContainer}>
          <View style={{ flex: 0.7 }} />
          <View
            style={{
              flex: 0.3,
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <View style={styles.content}>
              <Text style={styles.title} numberOfLines={1}>
                {title}
              </Text>
              <View style={styles.row}>
                <Text style={styles.price}>{price}</Text>
                <Text style={styles.dot}> • </Text>
                <Text style={styles.duration}>{duration}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.addButton} onPress={onAddToCart}>
              <Text style={styles.addText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  outerCard: {
    flexDirection: "row",
    backgroundColor: "#f7f7f7",
    marginBottom: 15,
    borderRadius: 8,
    elevation: 3,
    width: windowWidth / 1.8,
    height: 136,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  innerCard: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 10,
    fontWeight: "400",
    color: "white",
    marginBottom: 4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 8,
    fontWeight: "400",
    color: "#FFF",
  },
  dot: {
    fontSize: 14,
    color: "#FFF",
  },
  duration: {
    fontSize: 8,
    fontWeight: "400",
    color: "#FFF",
  },
  addButton: {
    borderWidth: 1,
    borderColor: "#FFF",
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    alignSelf: "flex-end",
    margin: 5,
  },
  addText: {
    color: "#FFF",
    fontWeight: "500",
    fontSize: 8,
  },
});

export default ListItem;
