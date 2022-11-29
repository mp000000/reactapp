import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import TownCard from "../components/TownCard";
import styles from "../styles/styles";
import { getTown, getTownIds } from "../data/towns";

function Towns() {
  const [towns, setTowns] = useState();
  useEffect(() => {
    getTownIds()
      .then((data) => {
        setTowns(data);
      })
      .catch(() => {});
  }, []);
  if (!towns) {
    return (
      <View style={styles.loadingScreen}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {towns.ids.map((e) => {
          return <TownCard key={e} data={e} />;
        })}
      </ScrollView>
    </View>
  );
}
export default Towns;
