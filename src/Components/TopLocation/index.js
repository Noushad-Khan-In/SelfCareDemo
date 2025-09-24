import { View, Text, Image, TouchableOpacity } from "react-native";
import { goBack } from "../../Navigation";

const locationIcon = require("../../assets/location.png");
const backIcon = require("../../assets/BackIcon.png");
const TopLocation = ({ title = "Your Location?", isBack = false }) => (
  <View style={{ paddingHorizontal: 16, paddingTop: 16 }}>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <TouchableOpacity
        style={{
          width: 32,
          height: 32,
          borderRadius: 16,
          backgroundColor: isBack ? "white" : "#f3f4f6",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 8,
        }}
        onPress={() => (isBack ? goBack() : {})}
      >
        <Image source={isBack ? backIcon : locationIcon} />
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 14, color: "#000000" }}>{title}</Text>
        {!isBack ? (
          <Text
            style={{
              fontSize: 10,
              fontWeight: "600",
              color: "#6C3C7A",
              textDecorationLine: "underline",
            }}
          >
            Add Your Location
          </Text>
        ) : null}
      </View>
    </View>
  </View>
);
export default TopLocation;
