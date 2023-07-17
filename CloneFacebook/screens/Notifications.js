import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

const Notifications = ({}) => {
  const [checkClick, setCheckClick] = useState(false);
  const [checkColour, setCheckColor] = useState("grey");

  const Data = [
    {
      userName: "John Doe",
      notification: "liked your post.",
      time: "10:30am",
      image: require("./components/person.jpeg"),
      event: require("./components/like.png"),
      id: "1",
    },
    {
      userName: "Random Sia",
      notification: "invited you to his event.",
      time: "9:30pm",
      image: require("./components/person.webp"),
      event: require("./components/invite.png"),
      id: "2",
    },
    {
      userName: "Taylor Love",
      notification: "sent you a friend request.",
      time: "11:30am",
      image: require("./components/pixel.jpeg"),
      event: require("./components/request.png"),
      id: "3",
    },
    {
      userName: "Lost Fairytale",
      notification: "invited you to like Sapiens.",
      time: "9:30pm",
      image: require("./components/leaf.jpeg"),
      event: require("./components/invite.png"),
      id: "4",
    },
    {
      userName: "Sheldon Cooper",
      notification: "uploaded a post.",
      time: "7:30am",
      image: require("./components/sheldon.jpeg"),
      event: require("./components/uplooad.png"),
      id: "5",
    },
    {
      userName: "Apple",
      notification: "added a new post.",
      time: "6:30pm",
      image: require("./components/apple.jpeg"),
      event: require("./components/added.png"),
      id: "6",
    },
    {
      userName: "Air Ram",
      notification: "hosted a guptabas party.",
      time: "4:30am",
      image: require("./components/ram.jpeg"),
      event: require("./components/host.png"),
      id: "7",
    },
    {
      userName: "Alice Man",
      notification: "commented on your post.",
      time: "12:30pm",
      image: require("./components/pixel1.jpeg"),
      event: require("./components/comment.png"),
      id: "8",
    },
    {
      userName: "Bob Malan",
      notification: "invited you to his page.",
      time: "9:30pm",
      image: require("./components/pixel2.jpeg"),
      event: require("./components/host.png"),
      id: "9",
    },
    {
      userName: "David Alice",
      notification: "added a new post.",
      time: "3:03am",
      image: require("./components/pixel3.jpeg"),
      event: require("./components/added.png"),
      id: "10",
    },
  ];

  const handleTouch = () => {
    setCheckClick(true);
    setCheckColor("white");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Notifications</Text>
      </View>
      <View style={styles.searchContainer}>
        <Image
          style={styles.imageSearch}
          source={require("./components/n.jpeg")}
        />
      </View>

      <View style={styles.flatlistContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Data}
          style={styles.mainList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.notificationContainer}>
              <TouchableOpacity
                onPress={handleTouch}
                style={{
                  backgroundColor: checkClick ? "white" : "grey",
                  padding: 10,
                  margin: 10,
                  shadowOpacity: 10,
                  borderRadius: 20,
                }}
              >
                <Image source={item.image} style={styles.notificationImage} />
                <Image source={item.event} style={styles.notificationEvent} />
                <Text style={styles.notificationText}>
                  {item.userName} {item.notification}
                </Text>
                <Text style={styles.notificationTime}>{item.time}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      <View></View>
    </SafeAreaView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    display: "flex",
  },
  searchContainer: {
    display: "flex",
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
  mainList: {
    flex: 1,
  },
  notificationContainer: {
    display: "flex",
    justifyContent: "space-between",
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 30,
    margin: 10,
  },
  notificationImage: {
    width: 70,
    height: 70,
    justifyContent: "space-between",
    borderRadius: 50,
  },
  notificationEvent: {
    width: 70,
    height: 70,
    justifyContent: "space-between",
    borderRadius: 20,
    marginLeft: 280,
    bottom: 70,
  },
  notificationText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  notificationTime: {
    fontSize: 20,
    fontWeight: "600",
  },
});
