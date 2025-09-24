import React from "react";
import { ScrollView, SafeAreaView, View, Text, Image } from "react-native";
import TopLocation from "../../Components/TopLocation";
import SearchBar from "../../Components/SearchBar";
import ServiceGrid from "../../Components/ServiceGrid";
import { sortedService } from "../../Data/DummyData";
import GroomingList from "../../Components/GroomingList";

const SalonServices = ({ route }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <SafeAreaView>
        <TopLocation isBack title={route?.params?.item?.title} />
        <SearchBar placeholder="Search Here" />
        <View
          style={{
            flexDirection: "row",
            marginTop: 16,
            justifyContent: "center",
            alignSelf: "flex-start",
            marginLeft: 16,
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
        <ServiceGrid services={sortedService} />
        <View
          style={{
            backgroundColor: "rgba(108, 60, 122, 0.13)",
            height: 34,
            alignItems: "center",
            flexDirection: "row",
            paddingHorizontal: 16,
          }}
        >
          <Image source={require("../../assets/packageIcon.png")} />
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: "black",
              marginLeft: 5,
            }}
          >
            Packages
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 16,
            justifyContent: "center",
            alignSelf: "flex-start",
            marginLeft: 16,
          }}
        >
          <Text style={{ color: "gray", fontSize: 10, fontWeight: "400" }}>
            Packages for Women
          </Text>
          <View style={{ width: 20 }} />
          <Text style={{ color: "#6C3C7A", fontSize: 10, fontWeight: "400" }}>
            Packages for Men
          </Text>
        </View>
        <GroomingList />
      </SafeAreaView>
    </ScrollView>
  );
};

export default SalonServices;
