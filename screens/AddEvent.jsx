import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";
import styles from "../styles/styles";
import { towns } from "../data/data";
function AddEvent(props) {
  const [title, changeTitle] = useState();
  const [desc, changeDesc] = useState();
  const [town, changeTown] = useState();
  const submit = () => {
    if (title === "" || desc === "") {
      Alert.alert("Vyplňte všechna pole");
    } else {
      if (towns[town]) {
        props.setEvents([
          ...props.events,
          {
            name: title,
            text: desc,
            town_id: town,
            id: props.events.length + 1,
          },
        ]);
        changeTitle("");
        changeDesc("");
        changeTown("");
        props.navigation.navigate("Events");
      } else {
        Alert.alert("Neplatné id města");
      }
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={changeTitle}
          value={title}
          onEndEditing={TextInput.blur}
          placeholder="Název"
        />
        <TextInput
          style={styles.input}
          onChangeText={changeDesc}
          value={desc}
          placeholder="Popis"
        />
        <TextInput
          style={styles.input}
          onChangeText={changeTown}
          value={town}
          placeholder="1-2"
        />
        <Pressable style={styles.pressable} onPress={submit}>
          <Text style={styles.text}>Odeslat</Text>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default AddEvent;
