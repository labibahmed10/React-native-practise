import { View, Text, FlatList, Image, RefreshControl } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { images } from "@/constants";
import SearchInput from "@/components/SearchInput";
import TrendingVideos from "@/components/TrendingVideos";
import EmptyFound from "@/components/EmptyFound";

export default function Home() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);

    // after a refresh -> if any new data is available
    setRefreshing(false);
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        className="px-4"
        data={[{ key: "1" }, { key: "2" }, { key: "3" }]}
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

            {/* search input */}
            <SearchInput />

            {/* horizontal video list */}

            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="font-pmedium text-sm text-gray-100">Trending Videos</Text>
            </View>

            <TrendingVideos posts={[{ id: 1 }, { id: 2 }] ?? []} />
          </View>
        )}
        ListEmptyComponent={() => {
          return <EmptyFound title="No videos were found" subtitle="Be the first to upload a new one" />;
        }}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </SafeAreaView>
  );
}
