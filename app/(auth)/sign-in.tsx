import { View, Text, ScrollView, Image, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import { useState } from "react";
import CustomeButton from "../../components/CustomeButton";
import { Link, router } from "expo-router";
import { signInUser } from "../../lib/appwrite";

export default function SignInScreen() {
  const [formVal, setFormVal] = useState({
    email: "",
    password: "",
  });
  const [submitting, isSubmitting] = useState(false);

  const submit = async () => {
    if (!formVal.email || !formVal.password) {
      Alert.alert("Error", "Please fill up the form!");
    }
    isSubmitting(true);
    try {
      await signInUser(formVal);

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      isSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full h-full flex justify-center px-4 my-6">
          <Image source={images.logo} className="w-[115px] h-[35px]" resizeMode="contain" />

          <Text className="text-2xl text-white font-psemibold mt-10 font-semibold">Log in to Aora</Text>

          <FormField
            label={"Email"}
            value={formVal.email}
            handleChangeText={(e) =>
              setFormVal({
                ...formVal,
                email: e,
              })
            }
            exdStyle={""}
          />
          <FormField
            label={"Password"}
            value={formVal.password}
            handleChangeText={(e) =>
              setFormVal({
                ...formVal,
                password: e,
              })
            }
            exdStyle={""}
          />

          <View className="items-end mt-3">
            <Text className="text-gray-100 font-pbold text-base">Forgot Password?</Text>
          </View>

          <CustomeButton textStyle="" title="Sign In" addStyle="mt-5" isLoading={submitting} handlePress={submit} />

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
