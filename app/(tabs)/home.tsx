import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { images } from "@/constants";

export default function Home() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        className="px-4"
        data={[{ key: "a" }, { key: "b" }, { key: "c" }]}
        renderItem={({ item }) => <Text>{item.key}</Text>}
        keyExtractor={(item) => item.key}
        ListHeaderComponent={() => (
          <View className="my-6 space-y-6">
            <View className="justify-between items-center flex-row mb-6">
              {/* welcome text */}
              <View>
                <Text className="font-pmedium text-sm text-gray-100">Welcome back</Text>
                <Text className="text-2xl font-psemibold text-gray-200">USER</Text>
              </View>

              {/* logo */}
              <View>
                <Image className="w-10 h-10" source={images.logoSmall} alt="aora logo" resizeMode="contain" />
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
