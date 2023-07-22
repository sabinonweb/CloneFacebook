import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Interest = () => {
  const interestsData = [
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
    <View style={{ flex: 1, backgroundColor: "aliceblue" }}>
      <View style={{ flex: 0.8 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 600,
            alignSelf: "flex-start",
            left: 15,
            top: 20,
          }}
        >
          Your Interests
        </Text>
        <Text
          style={{ fontSize: 15, alignSelf: "flex-start", top: 40, left: 15 }}
        >
          Choose yout interests for a better discovery experience.
        </Text>

        <TouchableOpacity>
          <View
            style={{
              borderWidth: 0.1,
              padding: 10,
              top: 55,
              width: 400,
              alignSelf: "center",
              borderRadius: 10,
              backgroundColor: "#22a8a4",
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                color: "white",
                fontWeight: 700,
                zIndex: 1,
              }}
            >
              Choose Interests
            </Text>
          </View>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 20,
            alignSelf: "flex-start",
            left: 15,
            top: 80,
            fontWeight: 600,
          }}
        >
          You may also like
        </Text>
      </View>
      <View style={{ flex: 2 }}>
        <ScrollView>
          {interestsData.map((list, key) => (
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
    </View>
  );
};

export default Interest;
