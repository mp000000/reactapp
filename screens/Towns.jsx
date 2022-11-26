import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import TownCard from "../components/TownCard";
import styles from "../styles/styles";
import { getTown, getTownIds } from "../data/towns";

function Towns() {
  const [towns, setTowns] = useState([]);
  getTownIds()
    .then((data) => {
      console.log(data.ids);
      data.ids.forEach((d) => {
        getTown(d).then((t) => {
          setTowns([...towns, t]);
          console.log(towns);
        });
      });
    })
    .catch(() => {});
  if (towns.length < 1) {
    return (
      <View style={styles.loadingScreen}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {towns.map((e) => {
          return <TownCard key={e.id} data={e} />;
        })}
      </ScrollView>
    </View>
  );
}
export default Towns;
