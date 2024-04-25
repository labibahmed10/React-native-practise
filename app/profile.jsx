import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <StatusBar style="dark" />
      {/* <Button title="Go home"> */}
      <Link href="/">Go home</Link>
      {/* Go Home */}
      {/* </Button> */}
    </View>
  );
}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffaacccc",
  },
});
