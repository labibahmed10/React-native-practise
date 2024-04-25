import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Page() {
  const randNum = (Math.random() * 100).toFixed();

  return (
    <View className="flex-1 items-center justify-center bg-[#f3edd5]">
      {/* <StatusBar style="auto" /> */}
      <Text className="text-3xl mb-5 font-bold shadow-xl bg-slate-200 px-10">Index page!</Text>

      <Link href={`/profile`} asChild>
        <Button title="Home" />
      </Link>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     gap: 10,
//     backgroundColor: "#ddeecc",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
