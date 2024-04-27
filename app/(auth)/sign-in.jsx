import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import TextFormField from "../../components/TextFormField";
import { useState } from "react";
import CustomeButton from "../../components/CustomeButton";
import { Link } from "expo-router";

export default function SignInScreen() {
  const [formVal, setFormVal] = useState({
    email: "",
    password: "",
  });
  const [submitting, isSubmitting] = useState(false);
  return (
    <SafeAreaView className="bg-primary h-full ">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full justify-center px-4 my-6">
          <Image source={images.logo} className="w-[115px] h-[35px]" resizeMode="contain" />

          <Text className="text-2xl text-white font-psemibold mt-10 font-semibold">Log in to Aora</Text>

          <TextFormField
            label={"Email"}
            value={formVal.email}
            handleChangeText={(e) =>
              setFormVal({
                ...formVal,
                email: e,
              })
            }
            exdStyle=""
          />
          <TextFormField
            label={"Password"}
            value={formVal.password}
            handleChangeText={(e) =>
              setFormVal({
                ...formVal,
                password: e,
              })
            }
            exdStyle=""
          />

          <View className="items-end mt-3">
            <Text className="text-gray-100 font-pbold text-base">Forgot Password?</Text>
          </View>

          <CustomeButton title="Sign In" addStyle="mt-5" isLoading={submitting} />

          <Text className="text-gray-100 text-lg text-center font-pmedium mt-5">
            Don’t have an account?{" "}
            <Link href="/sign-up" className="text-secondary">
              Signup
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
