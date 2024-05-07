import * as Animatable from "react-native-animatable";
import { FlatList, TouchableOpacity, Image, ImageBackground, Platform } from "react-native";
import React, { useRef, useState } from "react";
import { ResizeMode, Video } from "expo-av";
import { icons } from "@/constants";

const zoomIn = {
  0: {
    scale: 0.9,
  },
  1: {
    scale: 1.04,
  },
};

const zoomOut = {
  0: {
    scale: 1.04,
  },
  1: {
    scale: 0.9,
  },
};

const TrendingVideoCard = ({ video, activeVideo }) => {
  const [play, setplay] = useState(false);
  const videoRef = useRef(null);
  const [status, setStatus] = useState({});
  console.log(status);
  return (
    <Animatable.View className="mr-3 ml-3 mb-10" duration={500} animation={(activeVideo === video?.$id ? zoomIn : zoomOut) as any}>
      {play ? (
        <Video
          className="w-52 h-72 mt-4 rounded-xl bg-white/10"
          ref={videoRef}
          source={{
            uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          shouldPlay
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          importantForAccessibility="yes"
          onPlaybackStatusUpdate={(status) => {
            if ((status as any).didJustFinish) {
              setplay(false);
              setStatus(status);
            }
          }}
        />
      ) : (
        <TouchableOpacity
          onPress={() => setplay(true)}
          activeOpacity={0.7}
          className="w-52 h-72 mt-3 relative justify-center items-center rounded-xl"
        >
          <ImageBackground
            source={{
              uri: "https://th.bing.com/th/id/OIP.T3uKSLyRUnESJg01eGGDLAHaEo?rs=1&pid=ImgDetMain",
            }}
            className="w-full h-full rounded-xl overflow-hidden shadow-md shadow-black/40"
            resizeMode="cover"
          />

          <Image source={icons.play} className="w-12 h-12 absolute" resizeMode="contain" />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

export default function TrendingVideos({ posts }) {
  const [activeVideo, setActiveVideo] = useState(posts[0]?.$id);

  const viewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveVideo(viewableItems[0].key);
    }
  };

  return (
    <>
      <FlatList
        data={posts}
        keyExtractor={(post) => post.$id}
        renderItem={({ item }) => <TrendingVideoCard video={item} activeVideo={activeVideo} />}
        horizontal
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 70,
        }}
        contentOffset={{
          x: 150,
          y: 100,
        }}
      />
    </>
  );
}
