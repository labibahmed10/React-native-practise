import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";

interface SearchInputProps {
  label?: any;
  value?: any;
  handleChangeText?: any;
  exdStyle?: any;
}

export default function SearchInput({ label, value, handleChangeText, exdStyle }: SearchInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className="bg-black-100 border-black-200 w-full h-16 items-center rounded-lg focus:border-2 focus:border-secondary flex-row justify-between px-4">
      <TextInput
        className={`text-white  flex-1 text-base font-pregular`}
        cursorColor="#FF9001"
        selectionColor="#161622"
        placeholderTextColor={"#f1f1f1"}
        value={value}
        onChangeText={handleChangeText}
        placeholder="Search for a video topic"
      />

      <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
        <Image className="w-6 h-6" resizeMode="contain" source={icons.search} />
      </TouchableOpacity>
    </View>
  );
}
