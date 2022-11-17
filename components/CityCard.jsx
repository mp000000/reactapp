import {
  View,
  Text,
  TouchableWithoutFeedback,
  Modal,
  Alert,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import styles from "../styles/styles";
import MapView, { Marker } from "react-native-maps";
const CityCard = (props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{props.data.title}</Text>
      <Text>Kraj {props.data.region}</Text>
      <Text>Ulice: {props.data.street}</Text>
      <Text>Telefon: {props.data.phone}</Text>
      <Text>ICO: {props.data.ico}</Text>
      <Text>DIC: {props.data.dic}</Text>
      <Image source={{ uri: props.data.logo }} />
    </View>
  );
};

export default CityCard;
