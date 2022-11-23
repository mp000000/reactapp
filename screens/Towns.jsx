import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import TownCard from "../components/TownCard";
import styles from "../styles/styles";
import { towns } from "../data/data";
function Towns() {
  console.log(Object.values(towns));
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {Object.values(towns).map((e) => {
          return <TownCard key={e.dic} data={e} />;
        })}
      </ScrollView>
    </View>
  );
}
export default Towns;
