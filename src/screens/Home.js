import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { Image } from "expo-image";
import getStartedImg from "../../assets/getStarted.png";
const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.img} source={getStartedImg} />
      <Text style={styles.large}>Gets things done with to do</Text>
      <Text style={styles.medium}>
        Lorem ipsum dolor sit amet consectetur. Enim.
      </Text>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.replace("Register")}
      >
        <Text style={styles.white}>Get Started</Text>
      </Pressable>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DEEAE8",
    alignItems: "center",
    justifyContent: "space-evenly",
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
  img: {
    marginTop: 100,
    width: "90%",
    marginLeft: 80,
    height: 200,
  },
  medium: {
    fontSize: 16,
    width: "70%",
    fontWeight: "500",
    textAlign: "center",
  },
  large: {
    fontSize: 22,
    width: "70%",
    fontWeight: "700",
    textAlign: "center",
  },
});
export default Home;
