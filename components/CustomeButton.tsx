import { Text, TouchableOpacity } from "react-native";
import React from "react";

interface CustomeButtonProps {
  title?: string;
  handlePress?: () => void;
  addStyle?: string;
  textStyle?: string;
  isLoading?: boolean;
}

export default function CustomeButton({ title, handlePress, addStyle, textStyle, isLoading }: CustomeButtonProps) {
  return (
    <>
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.8}
        className={` bg-secondary min-h-[62px]  rounded-lg items-center justify-center ${addStyle} ${isLoading ? "opacity-50" : ""}`}
        disabled={isLoading}
      >
        <Text className={`text-xl font-psemibold text-primary ${textStyle}`}>{title}</Text>
      </TouchableOpacity>
    </>
  );
}
