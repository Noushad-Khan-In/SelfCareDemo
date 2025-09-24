import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

const SearchBar = ({ placeholder = "Looking for..." }) => (
  <View style={{ paddingHorizontal: 16, paddingTop: 12 }}>
    <View style={{ position: "relative" }}>
      <View style={styles.searchContainer}>
        <Image source={require("../../assets/search.png")} />
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          placeholderTextColor="#9ca3af"
        />
      </View>
      <Text style={styles.hiddenLabel}></Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 12,
    paddingVertical: 10,
    paddingLeft: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  input: {
    flex: 1,
    fontSize: 14,
    marginLeft: 15,
    color: "#000",
  },
  hiddenLabel: {
    position: "absolute",
    left: 12,
    top: 12,
    color: "#9ca3af",
  },
});

export default SearchBar;
