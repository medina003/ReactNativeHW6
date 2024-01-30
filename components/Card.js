import React, { lazy } from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Image } from "expo-image";
const Card = ({ imageSource, productInfo }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          style={styles.image}
          source="https://th.bing.com/th/id/R.d664b27cca7eaf4d64c41622b5bb9b6c?rik=yPz5kj6h%2fepZfA&pid=ImgRaw&r"
        ></Image>
      </View>
      <View style={styles.right}>
        <View style={styles.innerTop}>
          <Text style={{ fontSize: 16, fontWeight: 600 }}>Header</Text>
          <Text style={{ color: "#BDBDBD", fontSize: 14, fontWeight: 400 }}>
            8m ago
          </Text>
        </View>
        <View style={styles.feed}>
          <Text>
            He'll want to use your yacht, and I don't want this thing smelling
            like fish.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },
  box: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  image: {
    flex: 1,
    width: "100%",
  },
  right: {
    flex: 1,
    flexDirection: "column",
  },
  innerTop: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  feed: {
    paddingBottom: 10,
    borderBottomWidth: 3,
    borderColor: "#BDBDBD",
  },
});

export default Card;
