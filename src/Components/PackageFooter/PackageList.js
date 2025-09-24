import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import PackageCard from "./PackageCard";

const PackageList = ({ packages, title }) => {
  const [activeTab, setActiveTab] = useState("Men");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Men" && styles.activeTab]}
          onPress={() => handleTabChange("Men")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Men" && styles.activeTabText,
            ]}
          >
            Men
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Women" && styles.activeTab]}
          onPress={() => handleTabChange("Women")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Women" && styles.activeTabText,
            ]}
          >
            Women
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={packages}
        renderItem={({ item }) => (
          <PackageCard
            title={item.title}
            rating={item.rating}
            services={item.services}
            price={item.price}
            duration={item.duration}
            onAdd={() => alert("Added to Cart")}
            onEdit={() => alert("Editing Package")}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />

      <View
        style={{
          flex: 1,
          backgroundColor: "rbga(0,0,0,0.6)",
          height: 200,
          paddingVertical: 24,
          paddingHorizontal: 16,
        }}
      >
        <Text style={styles.footerText}>
          Where self-care meets ❤️ convenience
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  tabs: {
    flexDirection: "row",
    marginBottom: 15,
  },
  tab: {
    paddingHorizontal: 10,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
  activeTab: {
    backgroundColor: "#000000",
  },
  tabText: {
    fontSize: 16,
  },
  activeTabText: {
    color: "#fff",
  },
  header: {
    fontSize: 14,
    marginBottom: 15,
    fontWeight: "500",
    color: "black",
  },
  footerText: {
    fontSize: 16,
    color: "rbga(0,0,0,0.28)",
    marginTop: 15,
    fontWeight: "700",
  },
});

export default PackageList;
