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
      datePng: require("./components/time.png"),
      dp: require("./components/don.jpg"),
    },
    {
      id: 2,
      photo: require("./components/person.webp"),
      title: "Second Post",
      content: "This is the content of the second post.",
      author: "Jane Smith",
      date: "2023-07-18",
      liked: false,
      datePng: require("./components/time.png"),
      dp: require("./components/don.jpg"),
    },
    {
      id: 3,
      photo: require("./components/sheldon.jpeg"),
      title: "Third Post",
      content: "This is the content of the third post.",
      author: "Sheldon",
      date: "2023-07-19",
      liked: false,
      datePng: require("./components/time.png"),
      dp: require("./components/sheldon.jpeg"),
    },
    {
      id: 4,
      photo: require("./components/sun2.jpeg"),
      title: "Fourth Post",
      content: "This is the content of the fourth post.",
      author: "Emily Brown",
      date: "2023-07-20",
      liked: false,
      datePng: require("./components/time.png"),
      dp: require("./components/don.jpg"),
    },
    {
      id: 5,
      photo: require("./components/sun7.jpeg"),
      title: "Fifth Post",
      content: "This is the content of the fifth post.",
      author: "Michael Lee",
      date: "2023-07-21",
      liked: false,
      datePng: require("./components/time.png"),
      dp: require("./components/don.jpg"),
    },
    {
      id: 6,
      photo: require("./components/pixel1.jpeg"),
      title: "Sixth Post",
      content: "This is the content of the sixth post.",
      author: "Sophia Chen",
      date: "2023-07-22",
      liked: false,
      datePng: require("./components/time.png"),
      dp: require("./components/don.jpg"),
    },
    {
      id: 7,
      photo: require("./components/pixel3.jpeg"),
      title: "Seventh Post",
      content: "This is the content of the seventh post.",
      author: "William Kim",
      date: "2023-07-23",
      liked: false,
      datePng: require("./components/time.png"),
      dp: require("./components/don.jpg"),
    },
    {
      id: 8,
      photo: require("./components/pixel2.jpeg"),
      title: "Eighth Post",
      content: "This is the content of the eighth post.",
      author: "Olivia Anderson",
      date: "2023-07-24",
      liked: false,
      datePng: require("./components/time.png"),
      dp: require("./components/don.jpg"),
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
              <View>
                <Image source={item.datePng} style={styles.datePng} />
              </View>
              <View>
                <Image source={item.dp} style={styles.dp} />
              </View>
              <View style={styles.dateContainer}>
                <Text style={styles.date}>{item.date}</Text>
              </View>
              <View>
                <TouchableOpacity onPress={() => handleLikePressed(item.id)}>
                  <Ionicons
                    name="heart"
                    size={28}
                    color={item.liked ? "red" : "black"}
                    style={styles.like}
                  />
                </TouchableOpacity>
                <Ionicons
                  name="chatbubble-ellipses"
                  size={26}
                  color="black"
                  style={styles.comment}
                />
                <Ionicons
                  name="arrow-redo-circle"
                  size={28}
                  color="black"
                  style={styles.share}
                />
              </View>
              <View>
                <Ionicons
                  name="mail-open"
                  size={28}
                  color="black"
                  style={styles.doc}
                />
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
    borderWidth: 1,
    borderTopEndRadius: 100,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 30,
    padding: 5,
    display: "flex",
    alignItems: "flex-start",
    margin: 10,
  },
  image: {
    width: 395,
    height: 300,
    resizeMode: "cover",
    borderRadius: 20,
    marginTop: 80,
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
    bottom: 180,
    right: 180,
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
    top: 50,
    left: 50,
  },
  dateContainer: {
    flex: 1,
    bottom: 20,
  },
  date: {
    fontSize: 15,
    fontWeight: 700,
    left: 90,
    bottom: 460,
  },
  like: {
    left: 10,
    bottom: 140,
  },
  comment: {
    left: 50,
    bottom: 170,
  },
  share: {
    left: 90,
    bottom: 200,
  },
  datePng: {
    height: 20,
    width: 20,
    bottom: 410,
    left: 65,
  },
  dp: {
    height: 50,
    width: 50,
    left: 10,
    borderRadius: 100,
    bottom: 460,
  },
  doc: {
    width: 50,
    height: 50,
    bottom: 183,
    left: 10,
  },
});
