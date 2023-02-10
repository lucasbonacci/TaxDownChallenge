import React from 'react'
import { View, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Button } from '@/Components'
import { useTheme } from '@/Hooks'

import { logout } from '@/Store/Auth'

const ExampleContainer = () => {
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme()
  const dispatch = useDispatch()
  const { loading } = useSelector(({ auth }) => auth)

  const onLogout = () => {
    dispatch(logout())
  }

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
        <Button
          variant="default"
          title={'sing out'}
          onPress={onLogout}
          loading={loading}
        />
      </View>
    </ScrollView>
  )
}

export default ExampleContainer
