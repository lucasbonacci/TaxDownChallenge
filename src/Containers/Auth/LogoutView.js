import React from 'react'
import { View, Dimensions } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Button } from '@/Components'
import { useTheme } from '@/Hooks'
import { SVG } from '@/Assets/svg/index.js'

const { height } = Dimensions.get('window')

const LogoutView = ({ logoutAction, loading }) => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()

  return (
    <View
      style={[Layout.fill, Common.backgroundPrimary, Gutters.regularHPadding]}
    >
      <View style={[Layout.alignItemsCenter, Gutters.largeVMargin]}>
        <SVG.Logo height={150} width={300} fillColor="none" />
      </View>
      <Button
        title="sing out"
        onPress={logoutAction}
        loading={loading}
        disabled={loading}
      />
    </View>
  )
}

export default LogoutView
