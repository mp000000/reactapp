import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Card from "../components/Card";

function Events({ events }) {
  const renderCard = ({ item }) => {
    <Card data={item} />;
  };
  return (
    <View>
      <FlatList
        data={events}
        renderItem={(e) => <Card data={e.item} />}
        keyExtractor={(item) => item.id}
      />
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {events.map((e) => (
          <Card key={e.id} data={e} />
        ))}
      </ScrollView> */}
    </View>
  );
}
const styles = StyleSheet.create({
  ScrollView: {
    padding: 10,
  },
});
export default Events;
