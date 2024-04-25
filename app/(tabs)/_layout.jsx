import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import icons from "../../constants/icons";

const TabIcon = ({ icon, color, focused, name }) => {
  return (
    <View className="flex items-center justify-center flex-col gap-2">
      <Image source={icon} alt="icon image" resizeMode="contain" tintColor={color} className={`h-6 w-6 `} />
      <Text className={`${focused ? "font-psemibold" : "font-pregular"} text-xs `} style={{ color }}>
        {name}
      </Text>
    </View>
  );
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#ffa001",
        tabBarInactiveTintColor: "#cdcde0",
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 70,
        },
      }}
    >
      <Tabs.Screen
        name="home" //route-name
        options={{
          title: "Home", // name of the title of the tab navigator
          headerShown: false,
          headerShadowVisible: true,
          href: "/home",
          // tabBarActiveBackgroundColor: "#ffeeff",
          tabBarIcon: ({ focused, color }) => {
            return <TabIcon icon={icons.home} name="Home" color={color} focused={focused} />;
          },
        }}
      />
      <Tabs.Screen
        name="bookmark" //route-name
        options={{
          title: "Bookmark", // name of the title of the tab navigator
          headerShown: false,
          headerShadowVisible: true,
          href: "/bookmark",
          // tabBarActiveBackgroundColor: "#ffeeff",
          tabBarIcon: ({ focused, color }) => {
            return <TabIcon icon={icons.bookmark} name="Bookmark" color={color} focused={focused} />;
          },
        }}
      />
      <Tabs.Screen
        name="profile" //route-name
        options={{
          title: "Profile", // name of the title of the tab navigator
          headerShown: false,
          headerShadowVisible: true,
          href: "/profile",
          // tabBarActiveBackgroundColor: "#ffeeff",
          tabBarIcon: ({ focused, color }) => {
            return <TabIcon icon={icons.profile} name="Profile" color={color} focused={focused} />;
          },
        }}
      />
      <Tabs.Screen
        name="create" //route-name
        options={{
          title: "Create", // name of the title of the tab navigator
          headerShown: false,
          headerShadowVisible: true,
          href: "/create",
          // tabBarActiveBackgroundColor: "#ffeeff",
          tabBarIcon: ({ focused, color }) => {
            return <TabIcon icon={icons.plus} name="Create" color={color} focused={focused} />;
          },
        }}
      />
    </Tabs>
  );
}
