import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [plusClicked, setPlusClicked] = useState(false);

  const handleImage = (item, index) => {
    setSelectedImage(item);
    setShowFullImage(true);
  };

  const handlePlus = () => {
    setPlusClicked(true);
  };

  const handleBackwardImagePress = (item) => {
    setCurrentIndex(
      (prevImage) => (prevImage > 0 ? prevImage - 1 : main.length - 1),
      console.log(currentIndex)
    );
  };

  const handelForwardImagePress = () => {
    setCurrentIndex(
      (prevImage) => (prevImage < main.length - 1 ? prevImage + 1 : 0),
      console.log(currentIndex)
    );
  };

  useEffect(() => {
    console.log(currentIndex);
    if (currentIndex > 0 && currentIndex < main.length) {
      setShowFullImage(main[currentIndex]);
    }
  }, [currentIndex]);

  const handleCloseImage = (item) => {
    setShowFullImage(false);
  };

  const handleClosePlus = () => {
    setPlusClicked(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text1}>Stories</Text>
      </View>
      <View style={styles.container1}>
        <FlatList
          style={{ height: 200 }}
          horizontal
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          data={main}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <View>
              <View style={styles.container2}>
                {index === 0 && (
                  <View>
                    <View>
                      <Image style={styles.image1} source={item.story} />
                      <Image style={styles.dp} source={item.content} />
                      <Text style={styles.add}>
                        Add {"\n"}to{"\n"} story
                      </Text>
                      <TouchableOpacity onPress={handlePlus}>
                        <Image
                          style={styles.plus}
                          source={require("./components/mainplus.png")}
                        />
                      </TouchableOpacity>
                      {plusClicked && (
                        <View style={styles.plusContainer}>
                          <Modal
                            transparent={true}
                            animationType="slide"
                            style={styles.plusModal}
                          >
                            <Image
                              source={require("./components/white.jpeg")}
                              style={styles.plusImage}
                            />
                            <AntDesign
                              size={24}
                              name="closecircle"
                              color="black"
                              style={styles.antClosePlus}
                              onPress={handleClosePlus}
                            />
                            <TextInput
                              placeholder="Type Something"
                              style={styles.plusText}
                            ></TextInput>
                          </Modal>
                        </View>
                      )}
                    </View>
                  </View>
                )}
                {index !== 0 && (
                  <View>
                    <TouchableOpacity onPress={() => handleImage(item, index)}>
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
          <View>
            <Modal visible={showFullImage} animationType="slide">
              <View style={styles.modalContainer}>
                <Image source={selectedImage.story} style={styles.modalImage} />
              </View>

              <View style={styles.antContainer}>
                <AntDesign
                  name="closecircle"
                  size={24}
                  color="red"
                  onPress={handleCloseImage}
                  style={styles.ant}
                />
                <TouchableOpacity
                  onPress={handleBackwardImagePress}
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* <AntDesign
                    size={24}
                    color="white"
                    style={styles.backwardAnt}
                    name="caretleft"
                  /> */}
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={handelForwardImagePress}
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                  }}
                >
                  {/* <AntDesign
                    size={24}
                    color="white"
                    style={styles.forwardAnt}
                    name="caretright"
                  /> */}
                </TouchableOpacity>
              </View>
            </Modal>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
  },
  container1: {
    flex: 1,
    flexDirection: "column",
  },
  container2: {
    flex: 2,
  },
  text: {
    fontSize: 22,
  },
  text1: {
    marginLeft: 10,
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 150,
    borderWidth: 0,
    height: 200,
    width: 150,
    margin: 5,
    borderRadius: 20,
    top: 10,
  },
  image1: {
    width: 100,
    height: 150,
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
  ant: {
    position: "absolute",
    bottom: 850,
    left: 400,
  },
  backwardAnt: {
    position: "absolute",
    bottom: 20,
    left: 20,
  },
  forwardAnt: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  plusContainer: {
    display: "flex",
    justifyContent: "center",
  },
  plusModal: {
    flex: 1,
  },
  plusImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  plusText: {
    backgroundColor: "transparent",
    borderWidth: 0.5,
    borderColor: "black",
    padding: 10,
    borderRadius: 5,
    marginTop: 100,
    marginLeft: 20,
    width: "90%",
    display: "flex",
    justifyContent: "flex-start",
    height: 100,
  },
  antClosePlus: {
    position: "absolute",
    bottom: 850,
    left: 380,
  },
});
