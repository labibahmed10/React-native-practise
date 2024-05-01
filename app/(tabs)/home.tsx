import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  return (
    <SafeAreaView>
      <FlatList
        data={[{ key: "a" }, { key: "b" }, { key: "c" }]}
        renderItem={({ item }) => <Text>{item.key}</Text>}
        keyExtractor={(item) => item.key}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <Text>Header</Text>
              <Text>Header</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
