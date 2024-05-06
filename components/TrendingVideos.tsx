import * as Animatable from "react-native-animatable";
import { View, Text, FlatList } from "react-native";
import React from "react";
import EmptyFound from "./EmptyFound";

export default function TrendingVideos({ posts }) {
  // console.log(posts);
  return (
    <>
      <FlatList
        data={posts}
        keyExtractor={(post) => post.$id}
        renderItem={({ item }) => <Animatable.Text className="text-white">{item.$id}</Animatable.Text>}
        horizontal={true}
        // ListEmptyComponent={() => <EmptyFound title="No trending videos found" subtitle="" />}
      />
    </>
  );
}
