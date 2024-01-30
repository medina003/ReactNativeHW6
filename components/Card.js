import React, { lazy } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Card = () => {
  return (
    <View style={styles.container2}>
      <View style={styles.box}></View>
      <View style={{ flex: 1, flexDirection: "column", flexWrap: "wrap" }}>
        <Text style={{ fontSize: 14, fontWeight: 400, lineHeight: 16.94 }}>
          Item #1 Name
        </Text>
        <Text style={{ fontSize: 14, fontWeight: 400, lineHeight: 16.94 }}>
          Goes here
        </Text>
        <Text
          style={{
            marginTop: 5,
            fontSize: 14,
            fontWeight: 600,
            lineHeight: 16.94,
          }}
        >
          $19.99
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
  },
  box: {
    width: 110,
    height: 110,
    backgroundColor: "#bfbfbf",
    borderRadius: 8,
  },
});

export default Card;
