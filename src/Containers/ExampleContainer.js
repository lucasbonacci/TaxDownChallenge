import React, { useState, useEffect } from 'react'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Brand } from '@/Components'
import { useTheme } from '@/Hooks'
import { useLazyFetchOneQuery } from '@/Services/modules/users'
import { changeTheme } from '@/Store/Theme'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faLockOpen,
  faLock,
  faSquareQuestion,
  faBarcode,
  faBinarySlash,
  faXmark,
  faSquareCheck,
} from '@fortawesome/pro-solid-svg-icons'
import { SVG } from '@/Assets/Images/index.js'

const ExampleContainer = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme()
  const dispatch = useDispatch()

  const onChangeTheme = ({ theme, darkMode }) => {
    dispatch(changeTheme({ theme, darkMode }))
  }

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        Layout.fill,
        Layout.colCenter,
        Gutters.smallHPadding,
      ]}
    >
      <SVG.Logo height={150} width={24} fillColor="none" />
      <SVG.EntryCodes height={150} width={24} fillColor="#FFFFFF" />
    </ScrollView>
  )
}

export default ExampleContainer
