import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import { icons } from "@/constants";
import { ResizeMode, Video } from "expo-av";

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
  const videoRef = useRef(null);
  const [status, setStatus] = useState({});
  return (
    <View className="flex flex-col items-start mb-12 ">
      <View className="flex flex-row gap-3 items-start">
        <View className="border border-secondary w-[50px] h-[50px] rounded-lg">
          <Image
            source={{
              uri: video?.users?.avatar,
            }}
            resizeMode="cover"
            className="w-full h-full rounded-lg"
          />
        </View>

        <View className="flex flex-col items-start flex-1 gap-y-1">
          <Text numberOfLines={1} className="text-gray-200 text-sm font-psemibold truncate">
            {video.title + video.title}
          </Text>
          <Text className="text-gray-100 text-xs font-pregular">{video?.users?.username}</Text>
        </View>

        <View className="pt-3">
          <Image source={icons.menu} resizeMode="contain" className="w-5 h-5" />
        </View>
      </View>

      <View className="w-full h-fit">
        {play ? (
          <Video
            className="w-full h-60 mt-4 relative justify-center items-center rounded-xl"
            ref={videoRef}
            source={{
              uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            }}
            isLooping
            useNativeControls
            resizeMode={ResizeMode.COVER}
            importantForAccessibility="yes"
            onPlaybackStatusUpdate={(status) => setStatus(status)}
          />
        ) : (
          <TouchableOpacity onPress={() => setPlay(true)} activeOpacity={0.7} className="h-60 mt-4 relative justify-center items-center rounded-xl">
            <Image
              source={{
                uri: "https://th.bing.com/th/id/OIP.T3uKSLyRUnESJg01eGGDLAHaEo?rs=1&pid=ImgDetMain",
              }}
              className="w-full h-full rounded-xl"
              resizeMode="cover"
            />

            <Image source={icons.play} className="w-12 h-12 absolute" resizeMode="contain" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
