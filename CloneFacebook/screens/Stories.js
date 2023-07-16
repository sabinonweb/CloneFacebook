import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";

const Stories = () => {
  const main = [
    {
      story: require("./components/don.jpg"),
      content: require("./components/don.jpg"),
      title: "first",
      id: "1",
    },
    {
      story: require("./components/sun1.pong.jpeg"),
      content: require("./components/pixel.jpeg"),
      title: "second",
      id: "2",
    },
    {
      story: require("./components/sun2.jpeg"),
      content: require("./components/leaf.jpeg"),
      title: "third",
      id: "3",
    },
    {
      story: require("./components/sun3.jpeg"),
      content: require("./components/hand.jpeg"),
      title: "fourth",
      id: "4",
    },
    {
      story: require("./components/sun4.jpeg"),
      content: require("./components/person.webp"),
      title: "fifth",
      id: "5",
    },
    {
      story: require("./components/sun5.webp"),
      content: require("./components/pixel1.jpeg"),
      title: "sixth",
      id: "6",
    },
    {
      story: require("./components/sun6.webp"),
      content: require("./components/7.png"),
      title: "seventh",
      id: "7",
    },
    {
      story: require("./components/sun7.jpeg"),
      content: require("./components/pixel2.jpeg"),
      title: "eighth",
      id: "8",
    },
    {
      story: require("./components/sun9.webp"),
      content: require("./components/pixel3.jpeg"),
      title: "ninth",
      id: "9",
    },
    {
      story: require("./components/sun8.jpeg"),
      content: require("./components/pixel4.jpeg"),
      title: "tenth",
      id: "10",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [showFullImage, setShowFullImage] = useState(false);

  const handleImage = (item) => {
    setSelectedImage(item);
    setShowFullImage(true);
  };

  const handleCloseImage = (item) => {
    setShowFullImage(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text1}>Stories</Text>
      </View>
      <View style={styles.container1}>
        <FlatList
          horizontal
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          data={main}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <View>
              <View style={styles.container}>
                {index === 0 && (
                  <View>
                    <View>
                      <TouchableOpacity onPress={() => handleImage(item)}>
                        <Image style={styles.image1} source={item.story} />
                        <Image style={styles.dp} source={item.content} />
                        <Text style={styles.add}>
                          Add {"\n"}to{"\n"} story
                        </Text>
                        <Image
                          style={styles.plus}
                          source={require("./components/mainplus.png")}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
                {index !== 0 && (
                  <View>
                    <TouchableOpacity onPress={() => handleImage(item)}>
                      <Image style={styles.image} source={item.story} />
                      <Image style={styles.dp} source={item.content} />
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
          )}
        />

        {selectedImage && (
          <Modal
            style={styles.modal}
            visible={showFullImage}
            animationType="slide"
          >
            <View style={styles.modalContainer}>
              <Image source={selectedImage.story} style={styles.modalImage} />
            </View>
          </Modal>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 1,
    flexDirection: "row",
  },
  text: {
    fontSize: 22,
  },
  text1: {
    marginLeft: 10,
    fontSize: 30,
    fontWeight: "bold",
    marginTop: -20,
  },
  image: {
    width: 100,
    height: 100,
    borderWidth: 0,
    height: 200,
    width: 150,
    margin: 5,
    borderRadius: 20,
  },
  image1: {
    width: 100,
    height: 100,
    borderWidth: 0,
    height: 200,
    width: 150,
    margin: 5,
    borderRadius: 20,
    opacity: 0.5,
  },
  dp: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginTop: -200,
    marginLeft: 10,
  },
  plus: {
    width: 30,
    height: 30,
    marginLeft: 20,
  },
  add: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginLeft: 10,
  },
  modal: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
  },
  modalImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    resizeMode: "cover",
  },
});