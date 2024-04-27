import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomeButton from "../../components/CustomeButton";
import { StatusBar } from "expo-status-bar";
import { images } from "../../constants";

export default function SignInScreen() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full h-full justify-center items-center px-4 my-6"></View>
      </ScrollView>
    </SafeAreaView>
  );
}
