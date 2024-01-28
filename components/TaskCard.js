import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TaskCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="school-outline" size={24} color="#000000" />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Study lesson</Text>
        <Text style={styles.description}>8am</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon name="checkbox-outline" size={24} color="#000000" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  description: {
    fontSize: 16,
  },
});

export default TaskCard;