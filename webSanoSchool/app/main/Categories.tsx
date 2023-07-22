import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Subjects from "./Subjects";
import Interest from "./Interest";

const Tab = createMaterialTopTabNavigator();

const Categories = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* First View */}
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "500",
            alignSelf: "flex-start",
            left: 10,
          }}
        >
          Categories
        </Text>
        <Ionicons
          name="search"
          size={24}
          style={{ alignSelf: "flex-end", right: 10, bottom: 20 }}
        />
        <Tab.Navigator initialRouteName="Interests" screenOptions={{}}>
          <Tab.Screen
            name="Subjects"
            component={Subjects}
            style={{ fontWeight: "bold" }}
          />
          <Tab.Screen name="Interests" component={Interest} />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default Categories;
