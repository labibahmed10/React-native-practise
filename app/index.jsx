import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function Page() {
  return (
    <View className="flex-1 items-center justify-center bg-[#f3edd5]">
      <Text className="text-3xl font-pblack">Index page!</Text>
      <StatusBar style="auto" />

      <Link href="/profile">Go to home</Link>
    </View>
  );
}
