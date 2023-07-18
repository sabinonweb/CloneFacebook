import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const Posts = () => {
  const Data = [
    {
      id: 1,
      photo: require("./components/person.jpeg"),
      title: "First Post",
      content: "This is the content of the first post.",
      author: "John Doe",
      date: "2023-07-17",
      liked: false,
    },
    {
      id: 2,
      photo: require("./components/person.webp"),
      title: "Second Post",
      content: "This is the content of the second post.",
      author: "Jane Smith",
      date: "2023-07-18",
      liked: false,
    },
    {
      id: 3,
      photo: require("./components/sheldon.jpeg"),
      title: "Third Post",
      content: "This is the content of the third post.",
      author: "Alex Johnson",
      date: "2023-07-19",
      liked: false,
    },
    {
      id: 4,
      photo: require("./components/sun2.jpeg"),
      title: "Fourth Post",
      content: "This is the content of the fourth post.",
      author: "Emily Brown",
      date: "2023-07-20",
      liked: false,
    },
    {
      id: 5,
      photo: require("./components/sun7.jpeg"),
      title: "Fifth Post",
      content: "This is the content of the fifth post.",
      author: "Michael Lee",
      date: "2023-07-21",
      liked: false,
    },
    {
      id: 6,
      photo: require("./components/pixel1.jpeg"),
      title: "Sixth Post",
      content: "This is the content of the sixth post.",
      author: "Sophia Chen",
      date: "2023-07-22",
      liked: false,
    },
    {
      id: 7,
      photo: require("./components/pixel3.jpeg"),
      title: "Seventh Post",
      content: "This is the content of the seventh post.",
      author: "William Kim",
      date: "2023-07-23",
      liked: false,
    },
    {
      id: 8,
      photo: require("./components/pixel2.jpeg"),
      title: "Eighth Post",
      content: "This is the content of the eighth post.",
      author: "Olivia Anderson",
      date: "2023-07-24",
      liked: false,
    },
  ];

  const [isLiked, setIsLiked] = useState(Data.map((item) => ({ ...item })));

  const handleLikePressed = (pressedId) => {
    setIsLiked((prevData) =>
      prevData.map(
        (item) =>
          item.id === pressedId ? { ...item, liked: !item.liked } : item,
        console.log(isLiked),
        console.log("pressed")
      )
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.divider}></View>

      <FlatList
        data={Data}
        renderItem={({ item }) => (
          <View>
            <View style={styles.insideContainer}>
              <Image source={item.photo} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.author}>{item.author}</Text>
              </View>
              <View style={styles.contentContainer}>
                <Text style={styles.content}>{item.content}</Text>
              </View>
              <View style={styles.dateContainer}>
                <Text style={styles.date}>{item.date}</Text>
              </View>
              <View>
                <TouchableOpacity onPress={() => handleLikePressed(item.id)}>
                  <Ionicons
                    name="heart"
                    size={24}
                    color={item.liked ? "red" : "black"}
                    style={styles.like}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};
export default Posts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
  },
  divider: {
    height: 10,
    width: "100%",
    backgroundColor: "#C0C0C0",
  },
  insideContainer: {
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    display: "flex",
    alignItems: "flex-start",
    margin: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
  textContainer: {
    display: "flex",
    flex: 1,
    marginLeft: 250,
    bottom: 200,
  },
  author: {
    fontSize: 25,
    fontWeight: "bold",
  },
  contentContainer: {
    flex: 1,
    display: "flex",
    bottom: 30,
    paddingTop: 5,
  },
  content: {
    fontSize: 20,
    fontWeight: 900,
  },
  dateContainer: {
    flex: 1,
    bottom: 20,
  },
  date: {
    fontSize: 15,
    fontWeight: 700,
  },
  like: {
    left: 250,
    bottom: 230,
  },
});
