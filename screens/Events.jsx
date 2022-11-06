import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Card from "../components/Card";
function Events() {
  return (
    <View>
      <ScrollView
        style={styles.ScrollView}
        showsVerticalScrollIndicator={false}
      >
        <Card title="Událost" desc={"popis události".repeat(20)} />
        <Card title="Událost" desc={"popis události".repeat(20)} />
        <Card title="Událost" desc={"popis události".repeat(20)} />
        <Card title="Událost" desc={"popis události".repeat(20)} />
        <Card title="Událost" desc={"popis události".repeat(20)} />
        <Card title="Událost" desc={"popis události".repeat(20)} />
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
