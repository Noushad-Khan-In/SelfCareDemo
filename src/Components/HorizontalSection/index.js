import { View, Text } from "react-native";
import CategoryChips from "../CategoryChips";

const HorizontalSection = ({
  title,
  children,
  viewAll,
  style,
  isCategories,
}) => (
  <View style={{ marginTop: 24, paddingHorizontal: 16 }}>
    <View
      style={[
        {
          flexDirection: "column",
          justifyContent: "space-evenly",
          marginBottom: 12,
          backgroundColor: "white",
          height: 35,
          paddingLeft: 20,
        },
        style,
      ]}
    >
      {title ? (
        <Text style={{ fontSize: 12, fontWeight: "500", color: "black" }}>
          {title}
        </Text>
      ) : null}
      {viewAll && (
        <Text style={{ fontSize: 14, color: "#4f46e5" }}>View All</Text>
      )}
    </View>
    {isCategories ? (
      <View
        style={{
          flexDirection: "row",
          marginBottom: 10,
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "gray", fontSize: 10, fontWeight: "400" }}>
          Men
        </Text>
        <View style={{ width: 20 }} />
        <Text style={{ color: "#6C3C7A", fontSize: 10, fontWeight: "400" }}>
          Women
        </Text>
      </View>
    ) : null}
    {isCategories ? <CategoryChips /> : null}
    {children}
  </View>
);
export default HorizontalSection;
