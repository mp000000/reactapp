import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CityCard from "../components/CityCard";
import styles from "../styles/styles";
function Cities() {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {global.cities.forEach((value, key) => {
          return <CityCard data={value} />;
        })}
      </ScrollView>
    </View>
  );
}
export default Cities;
