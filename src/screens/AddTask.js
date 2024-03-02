import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  Button,
} from "react-native";
import Card from "../components/Card";
import GoalIcon from "../components/icons/GoalIcon";
import TaskIcon from "../components/icons/TaskIcon";
import EventIcon from "../components/icons/EventIcon";
const AddTask = ({ navigation }) => {
  const [task, setTask] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const HandleCategory = (iconName) => {
    setSelectedIcon(iconName);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />

      <View style={styles.titleBox}>
        <Text style={styles.title}>Add New Task</Text>
      </View>
      <View style={styles.box}>
        <View style={styles.inputBox}>
          <Text style={styles.inputName}>Task Title</Text>
          <View style={styles.textInput}>
            <TextInput
              style={styles.heading}
              placeholder="Task Title"
              onChangeText={setTask}
            ></TextInput>
          </View>
          <View style={styles.categoryBox}>
            <Text style={styles.inputName}>Category</Text>
            <Pressable onPress={() => HandleCategory("event")}>
              <EventIcon />
            </Pressable>
            <Pressable onPress={() => HandleCategory("goal")}>
              <GoalIcon />
            </Pressable>
            <Pressable onPress={() => HandleCategory("task")}>
              <TaskIcon />
            </Pressable>
          </View>
          <View style={styles.row}>
            <View>
              <Text style={styles.inputName}>Date</Text>

              <View style={styles.smallContainer}>
                <TextInput
                  style={styles.heading}
                  placeholder="Date"
                  onChangeText={setDate}
                ></TextInput>
              </View>
            </View>
            <View>
              <Text style={styles.inputName}>Time</Text>

              <View style={styles.smallContainer}>
                <TextInput
                  style={styles.heading}
                  placeholder="Time"
                  onChangeText={setTime}
                ></TextInput>
              </View>
            </View>
          </View>
          <Text style={styles.inputName}>Notes</Text>
          <View style={styles.NoteInput}>
            <TextInput
              style={styles.heading}
              placeholder="Notes"
              onChangeText={setNotes}
            ></TextInput>
          </View>
          <Pressable
            style={styles.btn}
            onPress={() =>
              navigation.navigate("List", {
                task: task,
                iconName: selectedIcon,
                date: date,
                time: time,
                notes: notes,
                added: true,
              })
            }
          >
            <Text style={styles.whiteFont}>Add New Task</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "lightgrey",
  },
  smallContainer: {
    width: 173,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "lightgrey",
    height: 40,
    justifyContent: "center",
    paddingHorizontal: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "flex-start",
  },
  categoryBox: {
    flex: 1,
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    maxHeight: 70,
  },
  heading: {
    fontSize: 20,
    color: "gray",
  },
  inputName: {
    fontSize: 16,
  },
  textInput: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "lightgrey",
    height: 40,
    justifyContent: "center",
    paddingHorizontal: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  NoteInput: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "lightgrey",
    height: 160,
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  titleBox: {
    flex: 1,
    alignItems: "center",
    maxHeight: 60,
  },
  inputBox: {
    flex: 1,
    flexDirection: "column",
  },
  box: {
    flex: 1,
    flexDirection: "column",
    marginHorizontal: 20,
  },
  title: {
    fontSize: 18,
    color: "white",
    marginTop: 30,
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
export default AddTask;
