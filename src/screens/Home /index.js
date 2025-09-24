import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import TopLocation from "../../Components/TopLocation";
import SearchBar from "../../Components/SearchBar";
import HorizontalSection from "../../Components/HorizontalSection";
import ServiceGrid from "../../Components/ServiceGrid";
import GradientList from "../../Components/NowServing";
import Package from "../../Components/PackageFooter/Package";
import ServicesList from "../../Components/ServiceCard";
import {
  essentialsServices,
  essentialsServicesGrooming,
  NowServingList,
  sortedService,
} from "../../Data/DummyData";

const HomeScreen = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <SafeAreaView>
        <TopLocation />
        <SearchBar />
        <ServiceGrid
          title={"Every Service Sorted For You"}
          services={sortedService}
        />

        <HorizontalSection
          title="Hot Picks Near You"
          style={{ backgroundColor: "#6C3C7A1C" }}
          isCategories={true}
        >
          <ServicesList />
        </HorizontalSection>

        <ServiceGrid
          title="Glow & Grace — Essentials for Her"
          services={essentialsServices}
        />

        <GradientList title="Now Serving" list={NowServingList} />
        <ServiceGrid
          title="Sharp & Styled — Grooming Essentials for Him"
          services={essentialsServicesGrooming}
        />
        <Package />
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
