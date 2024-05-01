import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";

export default function FormField({ label, value, handleChangeText, exdStyle, ...props }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className="mt-8 space-y-3">
      <Text nativeID={label} className="text-xl font-pmedium text-gray-100">
        {label}
      </Text>
      <View className="bg-black-100 w-full h-16 items-center rounded-lg focus:border-2 focus:border-secondary flex-row justify-between px-3">
        <TextInput
          className={`placeholder:text-gray-100 placeholder:font-pbold placeholder:text-md flex-1  text-base ${exdStyle}`}
          aria-label={label}
          cursorColor="#FF9001"
          selectionColor="#161622"
          secureTextEntry={label === "Password" && !showPassword}
          value={value}
          onChangeText={handleChangeText}
          {...props}
        />

        {label === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image className="w-7 h-6" resizeMode="contain" source={showPassword ? icons.eyeHide : icons.eye} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
