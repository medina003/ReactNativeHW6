import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { Image } from "expo-image";
const Register = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.large}>Welcome Onboard</Text>
        <Text style={styles.medium}>Let's help you meet up your tasks</Text>
      </View>
      <KeyboardAvoidingView style={styles.inputs}>
        <View style={styles.input}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your fullname"
          ></TextInput>
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email id"
          ></TextInput>
        </View>
        <View style={styles.input}>
          <TextInput
            secureTextEntry={true}
            style={styles.textInput}
            placeholder="Enter your password"
          ></TextInput>
        </View>
        <View style={styles.input}>
          <TextInput
            secureTextEntry={true}
            style={styles.textInput}
            placeholder="Enter confirm password"
          ></TextInput>
        </View>
        <View style={styles.bottomContainer}>
          <Pressable
            style={styles.btn}
            onPress={() => navigation.replace("Register")}
          >
            <Text style={styles.white}>Register</Text>
          </Pressable>
          <Pressable onPress={() => navigation.replace("Login")}>
            <Text>Already have an account? Sign in</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DEEAE8",
    flexDirection: "column",
  },
  textInput: {
    color: "black",
  },
  bottomContainer: {
    flex: 1,
    alignItems: "center",
    gap: 10,
    marginTop: 50,
  },
  input: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "lightgrey",
    height: 40,
    justifyContent: "center",
    paddingHorizontal: 10,
    borderRadius: 100,
  },
  inputs: {
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
    marginHorizontal: 30,
    gap: 10,
  },
  topContainer: {
    flex: 1,
    maxHeight: 200,
    marginBottom: 70,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#30A6AE",
    width: 280,
    alignItems: "center",
    paddingVertical: 20,
    height: 65,
  },
  white: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
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
    marginBottom: 20,
  },
});
export default Register;
