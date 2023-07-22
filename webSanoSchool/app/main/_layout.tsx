import { View, Text, StyleSheet, Button, Image } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const _layout = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Chats"
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
            } else if (route.name === "Chats") {
              iconName = focused ? "chatbubbles" : "chatbubbles-outline";
            } else if (route.name === "Categories") {
              iconName = focused ? "help-buoy" : "help-buoy-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "black",
        })}
      >
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
          backBehaviour="order"
        />
        <Tab.Screen
          name="Chats"
          component={Chats}
          backBehaviour="order"
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Categories"
          component={Categories}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default _layout;
