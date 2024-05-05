import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";

interface VideoCardProps {
  video: {
    prompt: string;
    thumbnail: string;
    title: string;
    users: {
      avatar: string;
      email: string;
      username: string;
    };
  };
}

export default function VideoCard({ video }: VideoCardProps) {
  const [play, setPlay] = useState(false);
  return (
    <View className="mb-12 border">
      <View className="flex-row items-start justify-center flex-1">
        <View className="border border-secondary w-[50px] h-[50px] rounded-lg">
          <Image
            source={{
              uri: video?.users?.avatar,
            }}
            resizeMode="contain"
            className="w-full h-full rounded-lg"
          />
        </View>
        <View className="justify-center flex-1 ml-3 gap-y-1">
          <Text numberOfLines={1} className="text-gray-200 text-sm font-psemibold truncate">
            {video.title + video.title}
          </Text>
          <Text className="text-gray-100 text-xs font-pregular">{video?.users?.username}</Text>
        </View>

        <View className="pt-3">
          <Image source={icons.menu} resizeMode="contain" className="w-5 h-5" />
        </View>
      </View>

      <View>
        {play ? (
          <Text className="text-white"> Playing</Text>
        ) : (
          <TouchableOpacity
            onPress={() => setPlay(true)}
            activeOpacity={0.7}
            className="w-full h-60 rounded-xl mt-3 relative justify-center items-center"
          >
            <Image
              source={{
                uri: "https://th.bing.com/th/id/OIP.T3uKSLyRUnESJg01eGGDLAHaEo?rs=1&pid=ImgDetMain",
              }}
              className="w-full h-full rounded-xl mt-3"
              resizeMode="contain"
            />

            <Image source={icons.play} className="w-12 h-12 absolute" resizeMode="contain" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
