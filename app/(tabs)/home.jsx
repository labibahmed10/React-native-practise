import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  return (
    <SafeAreaView>
      <StatusBar style="light" backgroundColor="#1E1E2D" />
      <Text>Home</Text>
    </SafeAreaView>
  );
}
