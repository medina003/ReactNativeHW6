import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  StatusBar,
  Button,
} from "react-native";
import Card from "../components/Card";
const List = ({ navigation, route }) => {
  const { params } = route;
  console.log(params?.iconName);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <View>
        <Text style={styles.title}>My ToDo List</Text>
      </View>
      <Card params={params}></Card>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate("AddTask")}
      >
        <Text style={styles.whiteFont}>Add New Task</Text>
      </Pressable>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "lightgrey",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    color: "white",
    marginTop: 50,
  },
  btn: {
    width: "90%",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#4A3780",
  },
  whiteFont: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
export default List;
