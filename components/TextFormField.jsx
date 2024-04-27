import { View, Text, TextInput } from "react-native";
import React from "react";

export default function TextFormField({ label, secureText }) {
  return (
    <View className="mt-8 space-y-3">
      <Text nativeID={label} className="text-xl font-pmedium text-gray-100">
        {label}
      </Text>
      <TextInput
        className="bg-black-100 w-full px-4 py-3 rounded-lg placeholder:text-gray-100 placeholder:font-pbold placeholder:text-md focus:border focus:border-secondary-200"
        aria-label={label}
        cursorColor="#FF9001"
        selectionColor="#161622"
      />
    </View>
  );
}
