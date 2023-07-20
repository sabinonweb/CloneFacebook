import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Bar = () => {
  return (
    <View style={styles.barContainer}>
      <Text style={styles.text}>Bar</Text>
    </View>
  );
};

export default Bar;

const styles = StyleSheet.create({
  barContainer: {
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 22,
  },
});
