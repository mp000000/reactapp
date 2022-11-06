import { StyleSheet, View, Text } from "react-native";
import React from "react";

const Card = (props) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={{ fontWeight: "bold", fontSize: 24 }}>
        {props.title}
      </Text>
      <Text numberOfLines={8}>{props.desc}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 10,
    backgroundColor: "#C0C0C0",
    borderRadius: 20,
    width: "100%",
    height: 200,
  },
});
