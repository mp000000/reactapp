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
import { getTown } from "../data/towns";
const TownCard = (props) => {
  const [town, setTown] = useState();
  getTown(props.key).then((data) => {
    setTown(data);
  });
  if (!town) {
    return (
      <View style={{ ...styles.card, height: 370 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.townCardText}>
            <Text style={styles.title}>Loading...</Text>
            <Text>Kraj: Loading...</Text>
            <Text>Ulice: Loading...</Text>
            <Text>Telefon: Loading...</Text>
            <Text>ICO: Loading...</Text>
            <Text>DIC: Loading...</Text>
          </View>
          <View style={styles.townCardLogo}>
            <Text>Loading...</Text>
          </View>
        </View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={{ ...styles.card, height: 370 }}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.townCardText}>
          <Text style={styles.title}>{town.name}</Text>
          <Text>Kraj: {town.region}</Text>
          <Text>Ulice: {town.street}</Text>
          <Text>Telefon: {town.phone}</Text>
          <Text>ICO: {town.ico}</Text>
          <Text>DIC: {town.dic}</Text>
        </View>
        <View style={styles.townCardLogo}>
          <Image source={{ uri: town.logo }} style={styles.townLogo} />
        </View>
      </View>
      <MapView
        style={styles.mapView}
        initialRegion={{
          latitude: town.coords.lat,
          longitude: town.coords.lng,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}
      >
        <Marker
          coordinate={{
            latitude: town.coords.lat,
            longitude: town.coords.lng,
          }}
        />
      </MapView>
    </View>
  );
};

export default TownCard;
