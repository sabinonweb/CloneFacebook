import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Button,
  ScrollView,
  FlatList,
  Image,
  Touchable,
} from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

const Notifications = ({}) => {
  const [check, setCheck] = useState({});

  const Data = [
    {
      userName: "John Doe",
      notification: "liked your post.",
      time: "10:30am",
      image: require("./components/prof1.jpeg"),
      id: "1",
    },
    {
      userName: "Robert Kiyosaki",
      notification: "invited you to his event.",
      time: "9:30pm",
      image: require("./components/prof2.png"),
      id: "2",
    },
    {
      userName: "Mark Manson",
      notification: "sent you a friend request.",
      time: "11:30am",
      image: require("./components/prof3.png"),
      id: "3",
    },
    {
      userName: "Yuval Harrari",
      notification: "invited you to like Sapiens.",
      time: "9:30pm",
      image: require("./components/prof2.png"),
      id: "4",
    },
    {
      userName: "Sheldon Cooper",
      notification: "uploaded a post.",
      time: "7:30am",
      image: require("./components/prof3.png"),
      id: "5",
    },
    {
      userName: "Apple",
      notification: "added a new post.",
      time: "6:30pm",
      image: require("./components/prof4.jpeg"),
      id: "6",
    },
  ];

  const pressHandler = (id) => {
    setCheck((prevState) => ({
      ...prevState,
      [id]: !check,
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.header}>Notifications</Text>
      </View>
      <View style={styles.container2}>
        <Image
          style={styles.imageSearch}
          source={require("./components/n.jpeg")}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          style={styles.flatlistContainer}
          data={Data}
          renderItem={({ item }) => (
            <View style={styles.container3}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.text}>{item.userName}</Text>
                <Text style={styles.notify}>{item.notification}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
  },
  imageSearch: {
    height: 35,
    width: 35,
    left: 390,
    marginTop: -35,
  },
  flatlistContainer: {
    flex: 1,
  },
  image: {
    width: 70,
    height: 70,
    backgroundColor: "blue",
    borderColor: "black",
    borderWidth: 0.1,
    borderRadius: 50,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "orange",
    marginLeft: 100,
  },
  notify: {
    fontSize1: 8,
    backgroundColor: "red",
    marginTop: 20,
  },
  container1: {},
  container3: {
    display: "flex",
    flexDirection: "row",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
  },
});
