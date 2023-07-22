import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Subjects = () => {
  const categoriesData = [
    {
      name: "Science",
      subText: "Newton and Einstein",
      id: 1,
      icon: "rocket-outline",
    },
    {
      name: "नेपाली ",
      subText: "नेपाली हाँमी रहुँला कहाँ(नेपालै नरहे)",
      id: 2,
      icon: "ribbon-outline",
    },
    {
      name: "Moral Science",
      subText: "Hustle, Respect, Morality",
      id: 3,
      icon: "people-circle-outline",
    },
    {
      name: "Compulsory Mathematics",
      subText: "Algebra and Geometry Simplified",
      id: 4,
      icon: "calculator-outline",
    },
    {
      name: "Optional Mathematics",
      subText: "No Si(g)n of Tan(sion)",
      id: 5,
      icon: "stats-chart-outline",
    },
    {
      name: "English",
      subText: "Language in the form of language",
      id: 6,
      icon: "text-outline",
    },
    {
      name: "HPEE",
      subText: "Health is wealth",
      id: 7,
      icon: "thermometer-outline",
    },
    {
      name: "Social Studies",
      subText: "Start with yourself",
      id: 8,
      icon: "walk-outline",
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "aliceblue",
      }}
    >
      <ScrollView>
        {categoriesData.map((list, key) => (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
            key={list.id}
          >
            <Ionicons
              name={list.icon}
              size={40}
              style={{ alignSelf: "center", right: 180, top: 20 }}
            />
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                alignSelf: "flex-start",
                bottom: 30,
                left: 70,
              }}
            >
              {list.name}
            </Text>
            <Text
              style={{
                fontSize: 16,
                alignSelf: "flex-start",
                left: 70,
                bottom: 30,
              }}
              numberOfLines={3}
              ellipsizeMode="tail"
            >
              {list.subText}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Subjects;
