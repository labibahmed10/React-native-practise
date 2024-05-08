import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "@/context/GlobalProvider";
import useAppwrite from "@/hook/useAppwrite";
import { getUserPosts } from "@/lib/appwrite";
import { router } from "expo-router";
import VideoCard from "@/components/VideoCard";
import EmptyFound from "@/components/EmptyFound";
import { icons } from "@/constants";
import InfoBox from "@/components/InfoBox";

export default function Profile() {
  const { user, setUser, setIsLogged } = useGlobalContext();
  const { data: posts } = useAppwrite(() => getUserPosts(user.$id));

  const logout = async () => {
    // await signOut();
    setUser(null);
    setIsLogged(false);

    router.replace("/sign-in");
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListEmptyComponent={() => <EmptyFound title="No Videos Found" subtitle="No videos found for this profile" />}
        ListHeaderComponent={() => (
          <View className="w-full flex justify-center items-center mt-6 mb-12 px-4">
            <TouchableOpacity onPress={logout} className="flex w-full items-end mb-10">
              <Image source={icons.logout} resizeMode="contain" className="w-6 h-6" />
            </TouchableOpacity>

            <View className="w-16 h-16 border border-secondary rounded-lg flex justify-center items-center">
              <Image source={{ uri: user?.avatar }} className="w-[90%] h-[90%] rounded-lg" resizeMode="cover" />
            </View>

            <InfoBox title={user?.username} containerStyles="mt-5" titleStyles="text-lg" />

            <View className="mt-5 flex flex-row">
              <InfoBox title={posts.length || 0} subtitle="Posts" titleStyles="text-xl" containerStyles="mr-10" />
              <InfoBox title="1.2k" subtitle="Followers" titleStyles="text-xl" />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
