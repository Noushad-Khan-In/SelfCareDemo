import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { navigate } from "../../Navigation";

export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;
const backgroundImg = require("../../assets/gradientImg.png");

const ServiceGrid = ({ title, services }) => {
  return (
    <View style={styles.container}>
      {title ? <Text style={styles.heading}>{title}</Text> : null}
      <FlatList
        data={services}
        numColumns={3}
        scrollEnabled={false}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.itemView}
            onPress={() => navigate("Details", { item: item })}
          >
            <ImageBackground
              key={index}
              style={styles.outerCard}
              source={item?.image}
              resizeMode={"cover"}
            >
              <ImageBackground
                style={[styles.innerCard]}
                source={backgroundImg}
              />
            </ImageBackground>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  itemView: {
    width: windowWidth / 3 - 24,
    marginBottom: 16,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    alignItems: "center",
  },
  heading: {
    fontSize: 14,
    fontWeight: "500",
    color: "black",
    marginBottom: 16,
  },
  outerCard: {
    height: 72,
    width: "100%",
  },
  innerCard: {
    flex: 1,
  },
  title: {
    flex: 1,
    fontSize: 12,
    fontWeight: "500",
    color: "black",
    paddingVertical: 8,
    textAlign: "center",
  },
});

export default ServiceGrid;
