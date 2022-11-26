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
import Towns from "./screens/Towns";
import Events from "./screens/Events";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { getEvents } from "./data/events";
import styles from "./styles/styles";

const Tab = createBottomTabNavigator();

export default function App() {
  const [eventsState, setEventsState] = useState(null);
  getEvents()
    .then((data) => {
      setEventsState(data);
    })
    .catch(() => {});
  if (!eventsState) {
    return (
      <View style={styles.loadingScreen}>
        <Text>Loading...</Text>
      </View>
    );
  }
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
              case "Towns":
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
            return (
              <Events
                {...props}
                events={eventsState}
                setEvents={setEventsState}
              />
            );
          }}
        </Tab.Screen>
        <Tab.Screen name="AddEvent">
          {(props) => {
            return (
              <AddEvent
                {...props}
                events={eventsState}
                setEvents={setEventsState}
              />
            );
          }}
        </Tab.Screen>

        <Tab.Screen name="Towns">
          {(props) => {
            return <Towns {...props} />;
          }}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
