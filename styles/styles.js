import { StyleSheet } from "react-native";

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
  card: {
    padding: 20,
    marginBottom: 10,
    backgroundColor: "#C0C0C0",
    borderRadius: 20,
    width: "100%",
    height: 200,
  },
  mapView: {
    height: 200,
    width: "100%",
  },
  loadingScreen: {
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    margin: 10,
    backgroundColor: "#FFF",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
  },
  pressable: {
    borderRadius: 20,
    backgroundColor: "tomato",
    padding: 10,
    width: "40%",
    margin: 10,
  },
  pressableText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  text: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  townCardLogo: {
    flex: 1,
  },
  townCardText: {
    flex: 1,
  },
  townLogo: {
    height: 130,
    width: "100%",
    resizeMode: "contain",
  },
  scrollView: {
    height: "40%",
    boderColor: "#262626",
  },
});
export default styles;
