import { View, Text, Alert, SafeAreaView, ScrollView, Image, TouchableOpacity, ImageSourcePropType } from 'react-native'
import React from 'react'
import icons from '@/constants/icons'
import images from '@/constants/images'
import { settings } from '@/constants/data';
import { useGlobalContext } from '@/lib/global-provider';
import { logout } from '@/lib/appwrite';

interface SettingsItemProps {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: string;
  showArrow?: boolean;
}

const SettingsItem = ({ icon, title, onPress, textStyle, showArrow = true }: SettingsItemProps) => (
  <TouchableOpacity className='flex flex-row items-center justify-between py-3' onPress={onPress}>
    <View className='flex flex-row items-center gap-3'>
      <Image source={icon} className='size-6'/>
      <Text className={`text-lg font-rubik-medium text-black-300 ${textStyle}`}>{title}</Text>
    </View>
    {showArrow && <Image source={icons.rightArrow} className='size-5'
      />  }
  </TouchableOpacity>
)
const profile = () => {
  const {user, refetch} = useGlobalContext();

  const handleLogout = async () => {

    const result = await logout();

    if(result) {
      refetch();
      Alert.alert('Success✅', 'Logged out successfully');
    }else{
      Alert.alert('Error', 'Failed to logout');
    }
  }
  return (
    <SafeAreaView className='h-full bg-white'>
      <ScrollView
      showsVerticalScrollIndicator = {false}
      contentContainerClassName='pb-32 px-7'
      >
        <View className='flex flex-row items-center justify-between mt-5'>
          <Text className='text-xl font-rubik-bold'>Profile</Text>
          <Image source={icons.bell} className='size-5'/>
        </View>

        <View className='flex-row justify-center flex mt-5'>

          <View className='flex flex-col items-center relative mt-5'>
            <Image source={{uri: user?.avatar || images.profile}} className='border-2 border-gray-300 rounded-full size-44 relative' />
            <TouchableOpacity className='absolute bottom-14 right-4'>
              <Image source={icons.edit} className='size-6'/>
            </TouchableOpacity>
            <Text className='text-2xl font-rubik-bold text-gray-600 mt-2'>Odeleye | P.Dev</Text>
            <Text className='text-sm font-rubik-medium text-gray-600'>@perspicacious.dev</Text>
          </View>

        </View>

        <View className='flex flex-col mt-10'>
          <SettingsItem icon={icons.calendar} title='My Bookings'/>
          <SettingsItem icon={icons.wallet} title='Payments'/>
        </View>

        <View className='flex flex-col mt-5 border-t pt-5 border-primary-200'>
          {settings.slice(2).map((item, index) => (
            <SettingsItem key={index} {...item} />
          ))}
        </View>

        <View className='flex flex-col mt-5 border-t pt-5 border-primary-200'>
          <SettingsItem icon={icons.logout} title='Logout' onPress={handleLogout}/>
        </View>

        
      </ScrollView>
    </SafeAreaView>
  )
}

export default profile

// https://www.jumia.com.ng/generic-led-strip-flexible-tape-indooroutdoor-light-remote-control-215550066.html
