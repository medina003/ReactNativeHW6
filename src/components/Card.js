import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { categoryIcons } from "./categoryIcons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Card = ({ navigation, params }) => {
  return (
    <View>
      {params?.added ? (
        <View style={styles.container}>
          {categoryIcons[params.iconName]}
          <View style={styles.texts}>
            <Text style={styles.large}>{params.task}</Text>
            <Text style={styles.mini}>
              {params.time} {params.date}
            </Text>
          </View>
          <MaterialCommunityIcons
            name="checkbox-blank-outline"
            size={24}
            color="black"
          />
        </View>
      ) : (
        <Text style={styles.ifEmpty}>Задача пока отсутствует</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    flexDirection: "row",
    marginVertical: 50,
    maxHeight: 100,
    alignItems: "center",
  },
  ifEmpty: {
    marginVertical: 40,
  },
  texts: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 20,
  },
  mini: {
    fontSize: 16,
  },
  btn: {
    backgroundColor: "#30A6AE",
    width: "90%",
    alignItems: "center",
    paddingVertical: 20,
  },
  white: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
  large: {
    fontSize: 20,
  },
});
export default Card;
