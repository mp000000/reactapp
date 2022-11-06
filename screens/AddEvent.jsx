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
function AddEvent() {
  const [title, changeTitle] = useState("Název");
  const [desc, changeDesc] = useState("Popis");
  const submit = () => {
    Alert.alert("Událost odeslána", `${title}\n\n${desc}`);
  };
  const selectCity = () => {};
  const citySelected = () => {};
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={changeTitle}
          value={title}
          onEndEditing={TextInput.blur}
        />
        <TextInput
          style={styles.input}
          onChangeText={changeDesc}
          value={desc}
        />
        <Pressable
          style={{
            ...styles.pressable,
            backgroundColor: "#262626",
            width: "80%",
            borderRadius: 5,
          }}
        >
          <Text style={styles.text}>Vyberte město</Text>
        </Pressable>
        <Pressable style={styles.pressable} onPress={submit}>
          <Text style={styles.text}>Odeslat</Text>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width: "80%",
  },
  pressable: {
    borderRadius: 20,
    backgroundColor: "tomato",
    padding: 10,
    width: "40%",
    margin: 10,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});
export default AddEvent;
