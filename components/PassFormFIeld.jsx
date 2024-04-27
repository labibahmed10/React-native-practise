import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function PassFormField({ label }) {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <View className="mt-8 space-y-3">
      <Text nativeID={label} className="text-xl font-pmedium text-gray-100">
        {label}
      </Text>
      <View className="flex-row items-center">
        <TextInput
          className="bg-black-100 w-full px-4 py-3 rounded-lg placeholder:text-gray-100 placeholder:font-pbold placeholder:text-md focus:border focus:border-secondary-200 "
          aria-label={label}
          cursorColor="#FF9001"
          selectionColor="#161622"
          secureTextEntry={showPassword}
        />

        <MaterialCommunityIcons
          name={showPassword ? "eye" : "eye-off"}
          size={28}
          style={{ position: "absolute", right: 10, width: 35, height: 32, marginHorizontal: "auto" }}
          color="#aaa"
          onPress={() => setShowPassword(!showPassword)}
        />
      </View>
    </View>
  );
}
