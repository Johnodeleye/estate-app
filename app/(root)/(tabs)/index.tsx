import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-3xl text-red-500 my-10 font-rubik">Welcome to Native</Text>
      <Link href={'/sign-in'}>Sign In</Link>
      <Link href={'/explore'}>Explore</Link>
      <Link href={'/sign-in'}>Profile</Link>
      <Link href={'/properties/1'}>Property</Link>
    </View>
  );
}

