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

export default function App() {
  global.cities = new Map();
  global.cities.set("0", {
    name: "Uherské Hradiště",
    posX: 49.05652513009945,
    posY: 17.49190669421165,
  });
  global.cities.set("1", {
    name: "Brno",
    posX: 49.21074360996304,
    posY: 16.610459619086303,
  });
  global.cities.set("2", {
    name: "Plzeň",
    posX: 49.73902833229202,
    posY: 13.36903044976678,
  });
  global.cities.set("3", {
    name: "Praha",
    posX: 50.06696022210748,
    posY: 14.429175504693859,
  });
  global.cities.set("4", {
    name: "Staré Město u Uherského Hradiště",
    posX: 49.07464435931809,
    posY: 17.428013858715598,
  });
  global.events = [
    {
      title: "Událost #512",
      desc: "popis události ".repeat(150),
      key: 1,
      city: "0",
    },
    {
      title: "Událost #512",
      desc: "popis události ".repeat(10),
      key: 2,
      city: "1",
    },
    {
      title: "Událost #512",
      desc: "popis události ".repeat(10),
      key: 3,
      city: "2",
    },
    {
      title: "Událost #512",
      desc: "popis události ".repeat(10),
      key: 4,
      city: "3",
    },
    {
      title: "Událost #512",
      desc: "popis události ".repeat(10),
      key: 5,
      city: "4",
    },
  ];
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
        <Tab.Screen name="Events" component={Events} />
        <Tab.Screen name="AddEvent" component={AddEvent} />
        <Tab.Screen name="Cities" component={Cities} />
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
