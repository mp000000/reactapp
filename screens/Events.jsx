import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Card from "../components/Card";

function Events() {
  const [events, changeEvents] = useState([...global.events]);
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {events.map((e) => (
          <Card key={e.key} data={e} />
        ))}
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
