import {
  View,
  Text,
  TouchableWithoutFeedback,
  Modal,
  Alert,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import styles from "../styles/styles";
import MapView, { Marker } from "react-native-maps";
const Card = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.container}>
          <View style={{ ...styles.modalView, backgroundColor: "#FFF" }}>
            <Text style={styles.title}>{props.data.title}</Text>
            <Text style={{ fontWeight: "bold" }}>
              {global.cities.get(props.data.city).name}
            </Text>
            <Text style={{ fontWeight: "bold" }}>
              {new Date(props.data.time).toUTCString()}
            </Text>
            <ScrollView
              style={styles.scrollView}
              showsVerticalScrollIndicator={false}
            >
              <Text>{props.data.desc}</Text>
            </ScrollView>
            <Pressable
              style={{ ...styles.pressable, backgroundColor: "#262626" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.pressableText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.card}>
          <Text numberOfLines={1} style={styles.title}>
            {props.data.title}
          </Text>
          <Text numberOfLines={8}>{props.data.desc}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Card;
