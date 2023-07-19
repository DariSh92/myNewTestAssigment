import React, { useState } from "react";

import { View, ScrollView, Text, StyleSheet } from "react-native";

const TEST = [
  {
    id: 1,
    titleItem: "Test 10",
  },
  {
    id: 2,
    titleItem: "Test 9",
  },
  {
    id: 3,
    titleItem: "Test 8",
  },
  {
    id: 4,
    titleItem: "Test 7",
  },
  {
    id: 5,
    titleItem: "Test 6",
  },
  {
    id: 6,
    titleItem: "Test 5",
  },
  {
    id: 7,
    titleItem: "Test 4",
  },
  {
    id: 8,
    titleItem: "Test 3",
  },
  {
    id: 9,
    titleItem: "Test 2",
  },
  {
    id: 10,
    titleItem: "Test 1",
  },
];

const FullPage = () => {
  const [tests, setTests] = useState(TEST);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Title</Text>
      </View>
      {tests.map((test) => (
        <View key={test.id} style={styles.item}>
          <Text style={styles.itemText}>{test.titleItem}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default FullPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30,
    marginTop: 50,
  },
  titleContainer: {
    height: 200,
    backgroundColor: "#6495ED",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  title: {
    color: "white",
    fontSize: 30,
  },
  item: {
    backgroundColor: "#191970",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 20,
    marginHorizontal: 15,
  },
  itemText: {
    color: "white",
    fontSize: 18,
  },
  titleItem: {
    justifyContent: "space-between",
  },
});
