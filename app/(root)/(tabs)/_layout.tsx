import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs
    screenOptions={{
        tabBarShowLabel:false,
    }}
    >
      <Text>Tabs</Text>
    </Tabs>
  )
}

export default TabsLayout