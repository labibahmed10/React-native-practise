import { View, Text, ScrollView, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import { images } from "../../constants";
import CustomeButton from "../../components/CustomeButton";
import { Link } from "expo-router";

export default function SingUpScreen() {
  const [formVal, setFormVal] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [submitting, isSubmitting] = useState(false);
  return (
    <SafeAreaView className="bg-primary h-full ">
      <ScrollView>
        <View
          className="w-full h-full justify-center px-4 my-6"
          //   style={{
          //     minHeight: Dimensions.get("window").height - 100,
          //   }}
        >
          <Image source={images.logo} className="w-[115px] h-[35px]" resizeMode="contain" />

          <Text className="text-2xl text-white font-psemibold mt-10 font-semibold">Sign Up into Aora</Text>

          <FormField
            label={"Username"}
            value={formVal.username}
            handleChangeText={(e) =>
              setFormVal({
                ...formVal,
                username: e,
              })
            }
          />
          <FormField
            label={"Email"}
            value={formVal.email}
            handleChangeText={(e) =>
              setFormVal({
                ...formVal,
                email: e,
              })
            }
            keyboardType="email-address"
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
            exdStyle=""
          />

          <View className="items-end mt-3">
            <Text className="text-gray-100 font-pbold text-base">Forgot Password?</Text>
          </View>

          <CustomeButton title="Sign In" addStyle="mt-5" isLoading={submitting} />

          <Text className="text-gray-100 text-lg text-center font-pmedium mt-5">
            Already have an account?{" "}
            <Link href="/sign-in" className="text-secondary">
              Sign In
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
