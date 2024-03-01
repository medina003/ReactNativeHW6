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
import logIn from "../../assets/logIn.png";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.inputs}>
        <View style={styles.topContainer}>
          <Text style={styles.large}>Welcome back !</Text>
          <Image style={styles.img} source={logIn} />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email"
          ></TextInput>
        </View>
        <View style={styles.input}>
          <TextInput
            secureTextEntry={true}
            style={styles.textInput}
            placeholder="Enter your password"
          ></TextInput>
        </View>
        <View style={styles.bottomContainer}>
          <Pressable style={styles.linkCenter}>
            <Text>Forget Password</Text>
          </Pressable>
          <Pressable
            style={styles.btn}
            onPress={() => navigation.replace("Login")}
          >
            <Text style={styles.white}>Login</Text>
          </Pressable>
          <Pressable
            style={styles.link}
            onPress={() => navigation.replace("Register")}
          >
            <Text style={styles.link}>Don't have an account? Sign up</Text>
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
    marginBottom: 150,
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
    marginBottom: 130,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 190,
  },
  img: { height: 300, width: "90%" },
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
export default Login;
