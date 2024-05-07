import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";
import { router, usePathname } from "expo-router";

interface SearchInputProps {
  initialQuery?: any;
  refetch?: () => void;
}

export default function SearchInput({ initialQuery }: SearchInputProps) {
  const pathName = usePathname();
  const [query, setQuery] = useState("");

  return (
    <View className="bg-black-100 border-black-200 w-full h-16 items-center rounded-lg focus:border-2 focus:border-secondary flex-row justify-between px-4">
      <TextInput
        className={`text-white  flex-1 text-base font-pregular`}
        cursorColor="#FF9001"
        selectionColor="#161622"
        placeholderTextColor={"#f1f1f1"}
        value={query}
        onChangeText={(e) => setQuery(e)}
        placeholder="Search for a video topic"
      />

      <TouchableOpacity
        onPress={(e) => {
          if (!query) {
            Alert.alert("Missing Query", "Please enter a search query");
            return;
          }
          if (pathName.startsWith("/search")) {
            router.setParams({ query });
          } else {
            router.push(`/search/${query}`);
          }
        }}
      >
        <Image className="w-6 h-6" resizeMode="contain" source={icons.search} />
      </TouchableOpacity>
    </View>
  );
}
