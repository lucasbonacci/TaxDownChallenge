import React from 'react'
import { View, Text } from 'react-native'
import { useTheme } from '@/Hooks'
import { useTranslation } from 'react-i18next'
import { Button } from '@/Components'
import ImagePicker from 'react-native-image-crop-picker'

const OpenCamera = ({ imagePath, setImagePath }) => {
  const { Gutters, Layout } = useTheme()
  const { t } = useTranslation()

  const openCamera = async () => {
    try {
      const image = await ImagePicker.openCamera({
        mediaType: 'photo',
        width: 400,
        height: 400,
      })
      setImagePath(image.path)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={(Layout.alignItemsCenter, Gutters.regularVPadding)}>
      <Button
        title={t('taxesText.postForm.addPhoto')}
        variant={'default'}
        onPress={openCamera}
      />
      {imagePath && <Text style={[Gutters.regularVPadding]}>{imagePath}</Text>}
    </View>
  )
}

export default OpenCamera
