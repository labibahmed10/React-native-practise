import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";

const Rootlayout = () => {
  return (
    <>
      {/* <View style={styles.container}>
        <Text>Rootlayout</Text>
        <StatusBar style="dark" />
      </View> */}
      <Slot />
    </>
  );
};

export default Rootlayout;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#ddeeee",
    alignItems: "center",
    justifyContent: "center",
  },
});
