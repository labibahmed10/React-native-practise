import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, useLocalSearchParams } from "expo-router";

export default function BlogSlug() {
  const { slug } = useLocalSearchParams();
  console.warn(slug);
  return (
    <View style={styles.container}>
      <Text>BlogSlug: {slug}</Text>
      <Link href="/">Go back</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#ffccaafa",
    height: "100%",
  },
});
