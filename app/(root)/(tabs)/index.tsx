import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Link } from "expo-router";
import { Image, SafeAreaView, Text, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">
        <Search/>
        <View className="flex flex-row items-center justify-between mt-5">
          <View className="flex flex-row items-center">
            <Image source={images.profile} className="size-12 rounded-full border border-gray-400" />
            <View className="flex flex-col items-start ml-2 justify-center">
              <Text className="text-xs font-rubik text-black-100">Good Morning</Text>
              <Text className="text-base font-rubik-medium text-black-300">John</Text>
            </View>
          </View>
          <Image source={icons.bell} className="size-6"/>
        </View>
      </View>
    </SafeAreaView>
    
  );
}

