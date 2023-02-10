import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { useTheme } from '@/Hooks'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/pro-solid-svg-icons'

const BackButton = ({ navigation }) => {
  const { Gutters, Colors, Layout } = useTheme()

  return (
    <View style={(Layout.alignItemsCenter, Gutters.regularVPadding)}>
      <TouchableOpacity
        onPress={navigation.goBack}
        style={[Gutters.largeRPadding, Gutters.regularLPadding]}
      >
        <FontAwesomeIcon icon={faArrowLeft} size={20} color={Colors.darker} />
      </TouchableOpacity>
    </View>
  )
}

export default BackButton
