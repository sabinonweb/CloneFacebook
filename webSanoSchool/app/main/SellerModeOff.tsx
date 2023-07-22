import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    Switch,
    ScrollView,
    ScrollViewBase,
  } from "react-native";
  import React, { useState } from "react";
  import { Ionicons } from "@expo/vector-icons";
  
  const SellerModeOff = ({ handleSwitch, switchClicked }) => {
    const meroData = [
      {
        name: "Get Inspired",
        icon: "sunny-outline",
        id: 1,
        arrow: "chevron-forward-outline",
      },
      {
        name: "Saved lists",
        icon: "heart-outline",
        id: 2,
        arrow: "chevron-forward-outline",
      },
      {
        name: "My Interests",
        icon: "file-tray-full-outline",
        id: 3,
        arrow: "chevron-forward-outline",
      },
      {
        name: "Invite friends",
        icon: "paper-plane-outline",
        id: 4,
        arrow: "chevron-forward-outline",
      },
    ];
  
    const settingsData = [
      {
        name: "Preferences",
        icon: "print-outline",
        id: 4,
        arrow: "chevron-forward-outline",
      },
      {
        name: "Account",
        icon: "albums-outline",
        id: 5,
        arrow: "chevron-forward-outline",
      },
    ];
  
    const resourcesData = [
      {
        name: "Support",
        icon: "link-outline",
        id: 6,
        arrow: "chevron-forward-outline",
      },
      {
        name: "Community and legal",
        icon: "help-circle-outline",
        id: 7,
        arrow: "chevron-forward-outline",
      },
      {
        name: "Become a Teacher",
        icon: "pencil-outline",
        id: 8,
        arrow: "chevron-forward-outline",
      },
    ];
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flex: 0.8,
            backgroundColor: "#820303",
            justifyContent: "flex-start",
            alignItems: "flex-end",
            // marginTop: -59,
          }}
        >
          <Ionicons
            name="notifications-outline"
            size={32}
            style={{ right: 10, marginTop: 50, position: "absolute" }}
            color="white"
          />
          <Image
            source={require("../../assets/images/sheldon.jpeg")}
            style={{
              borderRadius: 100,
              width: 60,
              height: 60,
              marginRight: 350,
              marginTop: 140,
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
              Become a Teacher
            </Text>
            <Switch
              trackColor={{ false: "#f0bbbb", true: "#bbf0bf" }}
              thumbColor={switchClicked ? "#038209" : "#820303"}
              ios_backgroundColor="#f0bbbb"
              onChange={handleSwitch}
              value={switchClicked}
              style={{ alignSelf: "flex-end", bottom: 10 }}
            />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text
              style={{
                fontSize: 22,
                left: 20,
                fontWeight: "bold",
                marginBottom: 20,
                marginTop: 25,
              }}
            >
              Mero Pathshala
            </Text>
  
            {meroData.map((list, key) => {
              return (
                <View key={list.id}>
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Ionicons
                      name={list.icon}
                      size={32}
                      style={{ alignSelf: "flex-start", left: 20, top: 23 }}
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        alignSelf: "flex-start",
                        bottom: 25,
                        left: 60,
                        top: -5,
                      }}
                    >
                      {list.name}
                    </Text>
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
                  </View>
                </View>
              );
            })}
  
            <Text
              style={{
                fontSize: 22,
                left: 20,
                fontWeight: "bold",
                marginBottom: 20,
                marginTop: 25,
              }}
            >
              Settings
            </Text>
  
            {settingsData.map((list, key) => {
              return (
                <View key={list.id}>
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Ionicons
                      name={list.icon}
                      size={32}
                      style={{ alignSelf: "flex-start", left: 20, top: 23 }}
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        alignSelf: "flex-start",
                        bottom: 25,
                        left: 60,
                        top: -5,
                      }}
                    >
                      {list.name}
                    </Text>
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
                  </View>
                </View>
              );
            })}
            <Text
              style={{
                fontSize: 22,
                left: 20,
                fontWeight: "bold",
                marginBottom: 20,
                marginTop: 25,
              }}
            >
              Mero Pathshala
            </Text>
  
            {resourcesData.map((list, key) => {
              return (
                <View key={list.id}>
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Ionicons
                      name={list.icon}
                      size={32}
                      style={{ alignSelf: "flex-start", left: 20, top: 23 }}
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        alignSelf: "flex-start",
                        bottom: 25,
                        left: 60,
                        top: -5,
                      }}
                    >
                      {list.name}
                    </Text>
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
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  };
  
  export default SellerModeOff;
  