import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import SellerModeOff from "./SellerModeOff";

const Profile = () => {
  const sellerData = [
    {
      name: "My Profile",
      icon: "person-circle-outline",
      id: 1,
      arrow: "chevron-forward-outline",
    },
    {
      name: "Earnings",
      icon: "cash-outline",
      id: 2,
      arrow: "chevron-forward-outline",
    },
    {
      name: "Share Gigs",
      icon: "share-outline",
      id: 3,
      arrow: "chevron-forward-outline",
    },
    {
      name: "Manage Gigs",
      icon: "card-outline",
      id: 4,
      arrow: "chevron-forward-outline",
    },
    {
      name: "Availability",
      icon: "hourglass-outline",
      id: 5,
      arrow: "chevron-forward-outline",
    },
    {
      name: "Invite friends",
      icon: "paper-plane-outline",
      id: 6,
      arrow: "chevron-forward-outline",
    },
    {
      name: "Custom Offer Templates",
      icon: "briefcase-outline",
      id: 7,
      arrow: "chevron-forward-outline",
    },
  ];

  const [switchClicked, setSwitchClicked] = useState(false);
  const [changeMode, setChangeMode] = useState(false);
  const handleSwitch = () => {
    setSwitchClicked((prevState) => !prevState);
    setChangeMode((prevMode) => !prevMode);
    console.log(changeMode);
  };

  return changeMode ? (
    //SellerModeOn
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 0.8,
          backgroundColor: "#233028",
          justifyContent: "flex-start",
          alignItems: "flex-end",
          marginTop: -59,
        }}
      >
        <Ionicons
          name="notifications-outline"
          size={32}
          style={{ marginRight: 10, marginTop: 50, position: "absolute" }}
          color="white"
        />
        <Image
          source={require("./components/sheldon.jpeg")}
          style={{
            borderRadius: 100,
            width: 60,
            height: 60,
            marginRight: 350,
            marginTop: 120,
          }}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#e1f4fa",
            alignSelf: "baseline",
            marginLeft: 90,
            bottom: 50,
          }}
        >
          Sheldon
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "white",
            alignSelf: "baseline",
            marginLeft: 90,
            bottom: 50,
          }}
        >
          Personal balance:
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>$0</Text>
        </Text>
      </View>
      <View style={{ flex: 2, backgroundColor: "#e1f4fa" }}>
        <View
          style={{
            borderWidth: 0.1,
            paddingHorizontal: 20,
            paddingVertical: 5,
            alignSelf: "center",
            backgroundColor: "#e1f4fa",
            borderRadius: 10,
            marginTop: -25,
            shadowOpacity: 1,
            shadowRadius: 5,
            width: 400,
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              alignSelf: "flex-start",
              top: 15,
            }}
          >
            Beome a Teacher
          </Text>
          <Switch
            trackColor={{ false: "#f0bbbb", true: "#bbf0bf" }}
            thumbColor={switchClicked ? "#038209" : "#820303"}
            ios_backgroundColor="#f0bbbb"
            onChange={(value) => setSwitchClicked(value)}
            value={handleSwitch}
            style={{ alignSelf: "flex-end", bottom: 10 }}
          />
        </View>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              alignSelf: "auto",
              marginTop: 30,
              marginLeft: 20,
              marginBottom: 20,
            }}
          >
            Selling
          </Text>

          {sellerData.map((list, key) => {
            return (
              <View key={list.id} style={{}}>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Ionicons
                    name={list.icon}
                    size={24}
                    style={{
                      marginLeft: 20,
                      alignSelf: "flex-start",
                      top: 23,
                    }}
                  />
                  <Ionicons
                    name={list.arrow}
                    size={24}
                    style={{
                      alignSelf: "flex-end",
                      right: 10,
                      bottom: 5,
                      opacity: 0.2,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "bold",
                      alignSelf: "flex-start",
                      bottom: 25,
                      left: 60,
                    }}
                  >
                    {list.name}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  ) : (
    <SellerModeOff
      handleSwitch={handleSwitch}
      switchClicked={switchClicked}
      setSwitchClicked={setSwitchClicked}
    ></SellerModeOff>
  );
};

export default Profile;
