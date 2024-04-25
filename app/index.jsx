import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export default function Page() {
  const randNum = (Math.random() * 100).toFixed();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Index page!</Text>

      <Link href={`/blog/${randNum}`} asChild>
        <Button title="Home" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: "#ddeecc",
    alignItems: "center",
    justifyContent: "center",
  },
});
