import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { useTheme } from '@/Hooks'

const StepOneView = () => {
  const { Common, Gutters, Layout } = useTheme()

  return (
    <ScrollView
      style={[Layout.fill, Common.backgroundPrimary]}
      contentContainerStyle={[
        Layout.fill,
        Layout.colCenter,
        Gutters.smallHPadding,
      ]}
    >
      <View style={[Gutters.regularPadding]}>
        <Text>sadas</Text>
      </View>
    </ScrollView>
  )
}

export default StepOneView
