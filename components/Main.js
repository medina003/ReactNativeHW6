import React, { lazy } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Card from "./Card";

const Main = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.miniText}>Back</Text>
        <Text style={styles.largeText}>Market</Text>
        <Text style={styles.miniText}>Filter</Text>
      </View>
      <View style={styles.search}>
        <Text style={{ fontSize: 20, color: "#bfbfbf" }}>Search</Text>
      </View>
      <View>
        <Text style={{ fontSize: 24, lineHeight: 29.05 }}>Hot deals</Text>
      </View>
      <View style={styles.itemsBox}>
        <Card
          productInfo="Информация о товаре 1"
          imageSource="https://ispot.ru/upload/iblock/b76/195/image.jpeg"
        ></Card>
        <Card
          productInfo="Информация о товаре 1"
          imageSource="https://pbs.twimg.com/media/D_2iAI0W4AAX40e.jpg:large"
        ></Card>
        <Card
          productInfo="Информация о товаре 1"
          imageSource="https://recover-store.ru/image/cache/catalog/import_files/1c/1caefcf0302811ed903800199982a85f_73bab71634dc11ed816e00199982a85f-1000x1000.jpg"
        ></Card>
      </View>
      <View>
        <Text
          style={{
            fontSize: 24,

            lineHeight: 29.05,
          }}
        >
          Trending
        </Text>
      </View>
      <View style={styles.itemsBox}>
        <Card
          productInfo="Информация о товаре 1"
          imageSource="https://ispot.ru/upload/iblock/b76/195/image.jpeg"
        ></Card>
        <Card
          productInfo="Информация о товаре 1"
          imageSource="https://pbs.twimg.com/media/D_2iAI0W4AAX40e.jpg:large"
        ></Card>
        <Card
          productInfo="Информация о товаре 1"
          imageSource="https://recover-store.ru/image/cache/catalog/import_files/1c/1caefcf0302811ed903800199982a85f_73bab71634dc11ed816e00199982a85f-1000x1000.jpg"
        ></Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    flexDirection: "column",
  },
  itemsBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  header: {
    width: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 80,
    alignItems: "center",
  },
  miniText: {
    fontSize: 16,
    lineHeight: 19.36,
    color: "#5DB075",
  },
  largeText: {
    fontSize: 30,
    lineHeight: 36.31,
  },
  search: {
    padding: 10,
    width: 370,
    height: 50,
    borderRadius: 25,
    alignItems: "flex-start",
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    borderColor: "#bfbfbf",
    borderWidth: 2,
    marginTop: 30,
    marginBottom: 30,
  },
});

export default Main;
