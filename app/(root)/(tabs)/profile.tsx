import { View, Text, Alert, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const profile = () => {
  const handleLogout = async () => {
    Alert.alert('hello', 'hello')
  }
  return (
    <SafeAreaView className='h-full bg-white'>
      <ScrollView
      showsVerticalScrollIndicator = {false}
      contentContainerClassName='pb-32 px-7'
      >
        <View>
          <Text className='text-xl font-rubik-bold'>Profile</Text>
        </View>

      </ScrollView>
      <Text>profile</Text>
    </SafeAreaView>
  )
}

export default profile

