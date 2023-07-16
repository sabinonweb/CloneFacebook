import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Post = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image source={require("./don.jpg")} style={styles.avatar} />
        </View>

        <View style={styles.input}>
          <TextInput
            placeholder="What's on your mind?"
            textAlignVertical="top"
          />
        </View>

        <View style={styles.profile}>
          <Image source={require("./image.png")} style={styles.image} />
        </View>
      </View>

      <View style={styles.divider}></View>
    </SafeAreaView>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    height: 50,
    width: 50,
    marginLeft: 10,
    marginTop: -50,
    borderRadius: 50,
  },
  input: {
    borderWidth: 1,
    marginTop: -50,
    width: 300,
    height: 40,
    marginLeft: 70,
    borderRadius: 50,
    padding: 10,
  },
  image: {
    height: 30,
    width: 30,
    marginLeft: 385,
    marginTop: -35,
  },
  divider: {
    height: 10,
    width: "100%",
    backgroundColor: "#C0C0C0",
    marginTop: 5,
  },
});
