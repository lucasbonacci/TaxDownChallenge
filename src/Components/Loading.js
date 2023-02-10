import React from 'react'
import { View, ActivityIndicator } from 'react-native'

import { useTheme } from '@/Hooks'

const Loading = ({ size }) => {
  const { Layout, Gutters, Colors } = useTheme()

  return (
    <View style={[Layout.center]}>
      <ActivityIndicator size={size} color={Colors.primary} />
    </View>
  )
}

export default Loading
