import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import TextFormField from "../../components/TextFormField";
import PassFormField from "../../components/PassFormFIeld";

export default function SignInScreen() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full justify-center px-4 my-6">
          <Image source={images.logo} className="w-[115px] h-[35px]" resizeMode="contain" />

          <Text className="text-2xl text-white font-psemibold mt-10 font-semibold">Log in to Aora</Text>

          <TextFormField label={"Email"} />
          <PassFormField label={"Password"} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
