import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Card from "../components/Card";

function Events(props) {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {props.events.map((e) => (
          <Card key={e.id} data={e} />
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
