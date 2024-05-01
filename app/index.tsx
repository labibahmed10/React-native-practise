import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomeButton from "../components/CustomeButton";
import { Link, Redirect, router } from "expo-router";
import { useGlobalContext } from "../context/GlobalProvider";

export default function Page() {
  const { isLoading, isLoggedIn } = useGlobalContext();
  if (isLoggedIn && !isLoading) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full px-4 justify-center items-center">
          <Image source={images.logo} className="w-[130px]  h-[60px] " resizeMode="contain" />

          <Image source={images.cards} className="max-w-[380px] w-full h-[300px]" resizeMode="contain" />

          <View className="mt-5 relative">
            <Text className="font-pbold text-3xl text-white text-center">
              Discover endless possibilites with <Text className="text-secondary">Aora</Text>
            </Text>
            <Image source={images.path} className="absolute -bottom-0 -right-8 w-[136px] h-[12px]" resizeMode="contain" />
          </View>

          <Text className="text-center font-pregular text-gray-100 mt-5">Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora</Text>

          <CustomeButton textStyle={""} isLoading={false} title="Continue with email" handlePress={() => router.push("sign-in")} addStyle="mt-6 w-full" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
