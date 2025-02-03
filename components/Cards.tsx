import { View, Text, TouchableOpacity, Image, Alert } from 'react-native'
import React from 'react'
import images from '@/constants/images';
import icons from '@/constants/icons';

interface Props {
    onPress?: () => void;
}

export const FeaturedCard = ({ onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} className='relative flex flex-col items-start w-60 h-80'>
        <Image source={images.newYork} className='size-full rounded-2xl'/>
        <Image source={images.cardGradient} className='absolute bottom-0 size-full rounded-2xl'/>
        
        <View className='flex flex-row items-center px-3 bg-white/90 py-1.5 rounded-full absolute top-5 right-5'>
            <Image source={icons.star} className='size-3.5'/>
            <Text className='mt-1 ml-1 text-sm font-rubik-bold text-primary-300'>4.4</Text>
        </View>

        <View className='absolute flex flex-col items-start bottom-5 inset-x-5'>
            <Text className='text-xl font-rubik-bold text-white' numberOfLines={1}>Modern Apartment</Text>
            <Text className='font-rubik text-white text-base'>22, Admiralty Way, Lekki, Lagos, Nigeria</Text>

            <View className='flex flex-row items-center justify-between w-full'>
              <Text className='text-xl font-rubik-bold text-white'>$2,500</Text>
              <Image source={icons.heart} className='size-5'/>
            </View>
        </View>
    </TouchableOpacity>
  )
}
//C:\Program Files\PostgreSQL\17, password is test
export const Card = () => {
  const onPress = () => {
    Alert.alert('Notification', 'Still working on this page ')
    console.log('Card pressed');
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>Card</Text>
    </TouchableOpacity>
  )
}


