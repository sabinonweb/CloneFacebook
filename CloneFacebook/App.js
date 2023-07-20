import { View, Text, StyleSheet, Button, Image } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import Notifications from "./screens/Notifications";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Settings from "./screens/Settings";
import Profile from "./screens/Profile.js";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Profile"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home-sharp" : "home-outline";
            } else if (route.name === "Notifications") {
              iconName = focused
                ? "notifications-circle"
                : "notifications-circle-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person-circle" : "person-circle-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "black",
        })}
      >
        {HomeScreen}
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
          backBehaviour="none"
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{ headerShown: false }}
          backBehaviour="order"
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
          backBehaviour="order"
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
          backBehaviour="order"
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1.2,
  },
  home: {
    fontSize: 18,
  },
  image: {
    height: 30,
    width: 30,
  },
});

export default App;
