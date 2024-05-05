import { View, Text, FlatList } from "react-native";
import React from "react";

export default function TrendingVideos({ posts }) {
  console.log(posts?.prompt);
  return (
    <>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={(item) => <Text className="text-white">{item.item.id}</Text>}
        horizontal={true}
      />
    </>
  );
}
