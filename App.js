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
