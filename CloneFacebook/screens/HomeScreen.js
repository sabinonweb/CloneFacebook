import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import App from "./components/Post";
import Stories from "./Stories";
import Posts from "./Posts";

const HomeScreen = () => {
  const searchButtonPressHandler = () => {
    console.log("Pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View>
          <Text style={styles.home}>facebook</Text>
        </View>

        <TouchableOpacity>
          <View style={styles.iconContainer}>
            <Image
              source={require("../assets/search.png")}
              style={styles.search}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.iconContainer}>
          <Image
            source={require("../assets/messenger.png")}
            style={styles.messenger}
          />
        </View>

        <TouchableOpacity onPress={searchButtonPressHandler}>
          <View style={styles.iconContainer}>
            <Image source={require("../assets/plus.png")} style={styles.plus} />
          </View>
        </TouchableOpacity>

        <View>
          <App></App>
        </View>

        <View style={styles.containerPosts}>
          <Stories></Stories>
          <Posts></Posts>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerStories: {
    flex: 0.8,
    backgroundColor: "yellow",
  },
  containerPosts: {
    flex: 1.2,
  },
  home: {
    fontSize: 30,
    color: "#1e90ff",
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 10,
  },
  iconContainer: {
    position: "absolute",
  },
  search: {
    height: 25,
    width: 30,
    justifyContent: "center",
    position: "absolute",
    left: 355,
    top: -35,
  },
  messenger: {
    height: 30,
    width: 25,
    marginLeft: 390,
    marginTop: 5,
  },
  plus: {
    height: 50,
    width: 25,
    marginLeft: 320,
    top: -50,
  },
});

export default HomeScreen;
