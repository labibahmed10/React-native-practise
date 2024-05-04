import { View, Text, Image } from "react-native";
import React from "react";
import { icons, images } from "@/constants";
import CustomeButton from "./CustomeButton";
import { router } from "expo-router";

export default function EmptyFound({ title, subtitle }) {
  return (
    <View className="flex-1 flex items-center justify-center">
      <Image source={images.empty} className="w-80 h-64" resizeMode="contain" />
      <Text className="text-white font-pmedium text-lg">{title}</Text>
      <Text className="text-white font-base text-sm">{subtitle}</Text>

      <CustomeButton title="Create Video" addStyle="w-full my-5" handlePress={() => router.push("/create")} />
    </View>
  );
}
