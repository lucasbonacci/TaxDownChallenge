import React from 'react'
import { ActionSheetIOS, Platform, TouchableOpacity, View } from 'react-native'
//import Share from 'react-native-share'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons'

const ShareButton = ({ message }) => {
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme()
  const { t } = useTranslation()

  const handleShareAndroid = () => {
    Share.open({
      message: t('entryCodesScreen.shareNewCode.message'),
    })
      .then(() => {
        console.log('Sended')
      })
      .catch(err => {})
  }

  const handleShareIos = () => {
    ActionSheetIOS.showShareActionSheetWithOptions(
      {
        message,
      },

      () => {},
      cb => {
        if (cb) {
          console.log('Sended')
        }
      },
    )
  }

  const share = () => {
    if (Platform.OS === 'android') {
      handleShareAndroid()
    } else {
      handleShareIos()
    }
  }

  return (
    <TouchableOpacity onPress={share}>
      <View
        style={
          (Layout.alignItemsCenter,
          Gutters.regularVPadding,
          Gutters.regularHPadding)
        }
      >
        <FontAwesomeIcon
          icon={faShareFromSquare}
          size={20}
          color={Colors.darker}
        />
      </View>
    </TouchableOpacity>
  )
}

export default ShareButton
