import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import icons from "@/constants/icons";

const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: ImageSourcePropType;
  title: string;
}) => (
  <View
    className="flex-1 justify-center items-center mt-5"
    style={{
      minHeight: 70, // Ensuring enough height for the icon and text
      width: 60, // Ensuring sufficient width for both icon and text
    }}
  >
    <Image
      source={icon}
      style={{
        width: 24,
        height: 24,
        tintColor: focused ? "#0061FF" : "#A0A0A0",
      }}
      resizeMode="contain"
    />
    {title && (
      <Text
        className={`${
          focused
            ? "text-primary-300 font-rubik-medium"
            : "text-black-200 font-rubik"
        }`}
        style={{
          fontSize: 12, // Adjust font size if necessary
          marginTop: 5, // Add spacing between icon and text
          lineHeight: 14, // Ensure text line height is adequate
          textAlign: "center", // Ensure text stays center-aligned
          width: "100%", // Prevent text from wrapping
        }}
        numberOfLines={1} // Restrict text to a single line
      >
        {title}
      </Text>
    )}
  </View>
);

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          bottom: 1,
          borderTopColor: "#0061FF1A",
          borderTopWidth: 1,
          minHeight: 60, // Ensure enough height for the tab bar
          paddingBottom: 10,
          marginTop: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} title="Explore" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
