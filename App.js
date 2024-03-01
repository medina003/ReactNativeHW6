import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  Button,
  StyleSheet,
  ImageBackground,
  Alert,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./src/navigation";
import { Image } from "expo-image";
import Home from "./src/screens/Home";

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

export default App;
