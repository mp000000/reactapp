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
const TownCard = (props) => {
  return (
    <View style={{ ...styles.card, height: 370 }}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.townCardText}>
          <Text style={styles.title}>{props.data.name}</Text>
          <Text>Kraj: {props.data.region}</Text>
          <Text>Ulice: {props.data.street}</Text>
          <Text>Telefon: {props.data.phone}</Text>
          <Text>ICO: {props.data.ico}</Text>
          <Text>DIC: {props.data.dic}</Text>
        </View>
        <View style={styles.townCardLogo}>
          <Image source={{ uri: props.data.logo }} style={styles.townLogo} />
        </View>
      </View>
      <MapView style={styles.mapView}>
        <Marker
          coordinate={{
            latitude: props.data.coords.lat,
            longitude: props.data.coords.lng,
          }}
        />
      </MapView>
    </View>
  );
};

export default TownCard;
