import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Card from "../components/Card";

function Events() {
  const events = [
    {
      title: "Událost #512",
      desc: "popis události ".repeat(10),
    },
    {
      title: "Událost #512",
      desc: "popis události ".repeat(10),
    },
    {
      title: "Událost #512",
      desc: "popis události ".repeat(10),
    },
    {
      title: "Událost #512",
      desc: "popis události ".repeat(10),
    },
  ];
  return (
    <View>
      <ScrollView
        style={styles.ScrollView}
        showsVerticalScrollIndicator={false}
      >
        {() => {
          events.forEach((e) => {
            return <Card data={{ ...e, title: "Ljadslkfjalskdfj" }} />;
          });
        }}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  ScrollView: {
    padding: 10,
  },
});
export default Events;
