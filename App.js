import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  Button,
} from "react-native";
import { useState } from "react";
import Card from "./components/Card";
import AddEvent from "./screens/AddEvent";
import Cities from "./screens/Cities";
import Events from "./screens/Events";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
global.cities = new Map();
global.cities.set("0", {
  name: "Uherské Hradiště",
  region: "Zlínský kraj",
  street: "HUH?",
  logo: "https://www.mesto-uh.cz/uploads/gallery/detail/1461.jpg",
  phone: "HUH?",
  ico: Math.floor(Math.random() * 1000000),
  dic: Math.floor(Math.random() * 1000000),
  posX: 49.05652513009945,
  posY: 17.49190669421165,
});
global.cities.set("1", {
  name: "Brno",
  region: "Jihomoravský kraj",
  street: "HUH?",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Logo_Brno.svg/1280px-Logo_Brno.svg.png",
  phone: "HUH?",
  ico: Math.floor(Math.random() * 1000000),
  dic: Math.floor(Math.random() * 1000000),
  posX: 49.21074360996304,
  posY: 16.610459619086303,
});
global.cities.set("2", {
  name: "Plzeň",
  region: "Plzeňský kraj",
  street: "HUH?",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Logo_of_Pilsen.svg/1920px-Logo_of_Pilsen.svg.png",
  phone: "HUH?",
  ico: Math.floor(Math.random() * 1000000),
  dic: Math.floor(Math.random() * 1000000),
  posX: 49.73902833229202,
  posY: 13.36903044976678,
});
global.cities.set("3", {
  name: "Praha",
  region: "Praha",
  street: "HUH?",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Logo_Praha.svg/800px-Logo_Praha.svg.png",
  phone: "HUH?",
  ico: Math.floor(Math.random() * 1000000),
  dic: Math.floor(Math.random() * 1000000),
  posX: 50.06696022210748,
  posY: 14.429175504693859,
});
global.cities.set("4", {
  name: "Staré Město u Uherského Hradiště",
  region: "Zlínský kraj",
  street: "HUH?",
  logo: "https://regiony.kurzy.cz/obrazky/znak/stare-mesto-okres-uherske-hradiste.png",
  phone: "HUH?",
  ico: Math.floor(Math.random() * 1000000),
  dic: Math.floor(Math.random() * 1000000),
  posX: 49.07464435931809,
  posY: 17.428013858715598,
});
export default function App() {
  const [events, setEvents] = useState([
    {
      title: "Událost #512",
      desc: "popis události ".repeat(150),
      key: 1,
      city: "0",
      time: Date.now(),
    },
    {
      title: "Událost #512",
      desc: "popis události ".repeat(10),
      key: 2,
      city: "1",
      time: Date.now(),
    },
    {
      title: "Událost #512",
      desc: "popis události ".repeat(10),
      key: 3,
      city: "2",
      time: Date.now(),
    },
    {
      title: "Událost #512",
      desc: "popis události ".repeat(10),
      key: 4,
      city: "3",
      time: Date.now(),
    },
    {
      title: "Událost #512",
      desc: "popis události ".repeat(10),
      key: 5,
      city: "4",
      time: Date.now(),
    },
  ]);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let icon;
            switch (route.name) {
              case "Events":
                icon = "event";
                break;
              case "Cities":
                icon = "location-city";
                break;
              case "AddEvent":
                icon = "add";
                break;
            }

            return (
              <MaterialIcons
                name={icon}
                size={24}
                color={focused ? "tomato" : "grey"}
              />
            );
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "grey",
        })}
      >
        <Tab.Screen name="Events">
          {(props) => {
            return <Events {...props} events={events} setEvents={setEvents} />;
          }}
        </Tab.Screen>
        <Tab.Screen name="AddEvent">
          {(props) => {
            return (
              <AddEvent {...props} events={events} setEvents={setEvents} />
            );
          }}
        </Tab.Screen>

        <Tab.Screen name="Cities">
          {() => {
            <Cities />;
          }}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  container1: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#FFF",
  },
  scroll: {
    padding: 20,
    paddingBottom: 0,
    marginBottom: 70,
  },
  nav: {
    paddingTop: 3,
    flex: 1,
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 70,
    backgroundColor: "#262626",
    zIndex: 2,
    flexDirection: "row",
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
});
