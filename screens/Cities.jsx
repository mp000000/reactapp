import React from "react";
import { View, Text, StyleSheet } from "react-native";
function Cities() {
  return (
    <View style={styles.container}>
      <Text>Cities screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Cities;
