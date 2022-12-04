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
import { towns } from "../data/data";
const Card = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.container}>
          <View style={{ ...styles.modalView, backgroundColor: "#FFF" }}>
            <Text style={styles.title}>{props.data.name}</Text>
            <Text style={{ fontWeight: "bold" }}>
              {towns[props.data.town_id].name}
            </Text>
            <ScrollView
              style={styles.scrollView}
              showsVerticalScrollIndicator={false}
            >
              <Text>{props.data.text}</Text>
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
            {props.data.name}
          </Text>
          <Text numberOfLines={8}>{props.data.text}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Card;
