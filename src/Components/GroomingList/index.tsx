import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

type PackageItem = {
  id: string;
  title: string;
  rating: number;
  reviews: string;
  price: string;
  duration: string;
  features: string[];
};

type Props = {
  item: PackageItem;
  onAdd: (id: string) => void;
  onEdit?: (id: string) => void;
};

const GroomingCard: React.FC<Props> = ({ item, onAdd, onEdit }) => {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity style={styles.addBtn} onPress={() => onAdd(item.id)}>
          <Text style={styles.addText}>+ ADD</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <Text style={styles.rating}>★ {item.rating}</Text>
        <Text style={styles.reviews}>| {item.reviews}</Text>
      </View>

      <Text style={styles.price}>
        {item.price} • {item.duration}
      </Text>

      <View style={styles.featureList}>
        {item.features.map((feature, index) => (
          <Text key={index} style={styles.feature}>
            • {feature}
          </Text>
        ))}
      </View>

      {onEdit && (
        <TouchableOpacity
          style={styles.editBtn}
          onPress={() => onEdit(item.id)}
        >
          <Text style={styles.editText}>Edit Your Package</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const data: PackageItem[] = [
  {
    id: "1",
    title: "Essential Grooming",
    rating: 4.3,
    reviews: "2.3K",
    price: "₹1190",
    duration: "40 mins",
    features: [
      "Haircut: Neat and professional haircut",
      "Beard Grooming: Beard trimming and shaping",
      "Head Massage: 10-minute head massage",
    ],
  },
  {
    id: "2",
    title: "Classic Refresh",
    rating: 4.3,
    reviews: "2.3K",
    price: "₹1190",
    duration: "40 mins",
    features: [
      "Haircut: Haircut for men",
      " Beard Grooming: Hot towel shave or beard trimming",
      "Facial: Deep pore cleansing facial",
      "Massage: 15-minute shoulder and neck massage",
    ],
  },
  {
    id: "3",
    title: "Quick Touch-Up",
    rating: 4.3,
    reviews: "2.3K",
    price: "₹1190",
    duration: "40 mins",
    features: [
      "Haircut: Quick tidy-up cut",
      "Beard Grooming: Simple beard trim",
      "Eyebrow Grooming: Eyebrow trimming and shaping",
    ],
  },
];

export default function GroomingList() {
  const handleAdd = (id: string) => {
    console.log("Added package:", id);
  };

  const handleEdit = (id: string) => {
    console.log("Edit package:", id);
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
        <GroomingCard
          key={index}
          item={item}
          onAdd={handleAdd}
          onEdit={handleEdit}
        />
      )}
      scrollEnabled={false}
      contentContainerStyle={{ padding: 16 }}
      ListFooterComponent={
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
      }
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#6A1B9A",
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  addText: {
    color: "#6A1B9A",
    fontWeight: "500",
    marginLeft: 4,
    fontSize: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  rating: {
    marginLeft: 4,
    fontSize: 8,
    color: "#333",
    fontWeight: "500",
  },
  reviews: {
    marginLeft: 4,
    fontSize: 8,
    color: "#666",
    fontWeight: "500",
  },
  price: {
    marginTop: 6,
    fontSize: 8,
    fontWeight: "400",
  },
  featureList: {
    marginTop: 8,
  },
  feature: {
    fontSize: 8,
    color: "rgba(0, 0, 0, 0.79)",
    fontWeight: "400",
    marginBottom: 4,
  },
  editBtn: {
    marginTop: 12,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 6,
    alignItems: "center",
    width: "30%",
  },
  editText: {
    fontSize: 8,
    fontWeight: "500",
    color: "#333",
  },
  footerText: {
    fontSize: 16,
    color: "rbga(0,0,0,0.28)",
    marginTop: 15,
    fontWeight: "700",
  },
});
