import React, { lazy } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Card from "./Card";
import { Image } from "expo-image";

const Main = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.miniText}>Back</Text>
        <Text style={styles.largeText}>Feed</Text>
        <Text style={styles.miniText}>Filter</Text>
      </View>
      <View style={styles.search}>
        <Text style={{ fontSize: 20, color: "#bfbfbf" }}>Search</Text>
      </View>
      <View styles={styles.box}></View>
      <View>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </View>
      <View style={styles.box}>
        <Image
          style={styles.image}
          source="https://klike.net/uploads/posts/2019-12/1575281161_2.jpg"
        ></Image>
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
  box: {
    flex: 1,
    alignItems: "center",
    width: "auto",
    height: 227.98,
    borderRadius: 8,
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
    fontWeight: 600,
  },
  search: {
    padding: 10,
    width: "100%",
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
  image: {
    flex: 1,
    width: "100%",
    borderRadius: 8,
  },
});

export default Main;
