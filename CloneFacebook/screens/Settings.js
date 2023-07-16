import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import React, { useState } from "react";
import settings from "./components/settings.png";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
const Settings = () => {
  const [showData, setShowData] = useState(false);
  const Title = [
    {
      title: "Help & Support",
      id: "0",
      content: require("./components/qm.png"),
    },
    {
      title: "Settings & privacy",
      id: "123",
      content: require("./components/settings.png"),
    },
  ];

  const Data = [
    {
      title: "Settings",
      id: "1",
      content: require("./components/setttingss.jpeg"),
    },
    {
      title: "Privacy shortcuts",
      id: "2",
      content: require("./components/privacyshortcuts.png"),
    },
    {
      title: "Your Time on Facebook",
      id: "3",
      content: require("./components/time.jpeg"),
    },
    {
      title: "Device requests",
      id: "4",
      content: require("./components/phone.jpeg"),
    },
    {
      title: "Recent ad activity",
      id: "5",
      content: require("./components/ads.png"),
    },
    {
      title: "Orders and payments",
      id: "6",
      content: require("./components/card.png"),
    },
    {
      title: "Dark Mode",
      id: "7",
      content: require("./components/dnd.png"),
    },
    {
      title: "Language",
      id: "8",
      content: require("./components/language.png"),
    },
    {
      title: "Cellular Data Usage",
      id: "9",
      content: require("./components/cellular.png"),
    },
    {
      title: "Code Generator",
      id: "10",
      content: require("./components/key.jpeg"),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menu}>
        <Text style={styles.text}>Menu</Text>
      </View>
      <View>
        <Image source={settings} style={styles.setImage} />
      </View>
      <View>
        <Image
          source={require("./components/searchNoti.jpeg")}
          style={styles.setSearch}
        />
      </View>

      <View style={styles.container2}>
        <FlatList
          style={styles.flatlist1}
          data={Title}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.containerOpacity}>
              <TouchableOpacity
                onPress={() => setShowData(!showData)}
                style={styles.touchableArea}
              >
                <View>
                  {showData ? (
                    <Image
                      style={styles.arrow}
                      source={require("./components/arrowUp.jpeg")}
                    />
                  ) : (
                    <Image
                      style={styles.arrow}
                      source={require("./components/arrowDown.png")}
                    />
                  )}
                </View>
              </TouchableOpacity>
              <Text style={styles.head}>{item.title}</Text>
              <Image style={styles.private} source={item.content} />
            </View>
          )}
        />
        {showData && (
          <FlatList
            style={styles.flatlist2}
            data={Data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.container3}>
                <Text style={styles.tail}>{item.title}</Text>
                <Image style={styles.private} source={item.content} />
              </View>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  container1: {
    flex: 1,
  },
  menu: {
    backgroundColor: "white",
    shadowRadius: 1,
    shadowOpacity: 1,
    shadowColor: "silver",
  },
  text: {
    fontSize: 30,
    fontWeight: "500",
    marginLeft: 10,
    marginTop: 0,
  },
  set: {
    flex: 1,
  },
  setImage: {
    width: 25,
    height: 25,
    marginTop: -30,
    marginLeft: 360,
  },
  setSearch: {
    width: 30,
    height: 36,
    marginLeft: 400,
    marginTop: -36,
  },
  main: {
    fontSize: 22,
    fontWeight: 900,
    marginTop: -340,
    marginLeft: 50,
  },
  privacy: {
    width: 35,
    height: 35,
    marginTop: -530,
    marginLeft: 30,
  },
  head: {
    marginTop: -10,
    fontWeight: "500",
    fontSize: 22,
    marginLeft: 50,
    marginTop: 20,
  },
  private: {
    height: 20,
    width: 20,
    marginTop: -20,
    marginLeft: 10,
  },
  tail: {
    marginTop: 0,
    fontWeight: "500",
    fontSize: 22,
    marginLeft: 40,
  },
  container2: {
    flex: 1,
  },
  containerOpacity: {
    flex: 1,
  },
  container3: {
    marginTop: 20,
    padding: 15,
    marginTop: 7,
    borderWidth: 0,
    width: 400,
    marginLeft: 15,
    borderRadius: 10,
    backgroundColor: "white",
    shadowOpacity: 0.2,
  },
  arrow: {
    flex: 1,
    flexDirection: "row",
    marginTop: 30,
    height: 18,
    width: 18,
    position: "absolute",
    left: 400,
  },
});
