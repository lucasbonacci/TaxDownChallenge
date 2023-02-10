import React from 'react'
import { View } from 'react-native'
import { Loading } from '@/Components'
import { useTheme } from '@/Hooks'

const LoadingView = () => {
  const { Common, Layout } = useTheme()

  return (
    <View
      style={[
        Layout.fill,
        Common.backgroundPrimary,
        Layout.justifyContentCenter,
      ]}
    >
      <Loading size="large" />
    </View>
  )
}

export default LoadingView
