import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import useAppwrite from "@/hook/useAppwrite";
import { searchPosts } from "@/lib/appwrite";
import VideoCard from "@/components/VideoCard";
import SearchInput from "@/components/SearchInput";
import EmptyFound from "@/components/EmptyFound";

export default function Search() {
  const { query } = useLocalSearchParams();
  const { data: posts, refetchData } = useAppwrite(() => searchPosts(query));
  console.log(query);

  useEffect(() => {
    refetchData();
  }, [query]);

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item?.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <>
            <View className="flex my-6 px-4">
              <Text className="font-pmedium text-gray-100 text-sm">Search Results</Text>
              <Text className="text-2xl font-psemibold text-white mt-1">{query}</Text>

              <View className="mt-6 mb-8">
                <SearchInput initialQuery={query} refetch={refetchData} />
              </View>
            </View>
          </>
        )}
        ListEmptyComponent={() => <EmptyFound title="No Videos Found" subtitle="No videos found for this search query" />}
      />
    </SafeAreaView>
  );
}
