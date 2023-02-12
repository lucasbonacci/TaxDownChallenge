import React from 'react'
import {
  View,
  ScrollView,
  Text,
  KeyboardAvoidingView,
  Dimensions,
  Platform,
} from 'react-native'
import { useTheme } from '@/Hooks'
import { Box, Loading, DynamicForm } from '@/Components'
import { useTranslation } from 'react-i18next'
import { useForm, Controller } from 'react-hook-form'

const { height } = Dimensions.get('window')

const TaxItemDetailView = ({
  loading,
  item,
  editTaxAction,
  imagePath,
  editLoading,
  setImagePath,
}) => {
  const { Common, Gutters, Layout, Colors, Fonts } = useTheme()
  const { t } = useTranslation()

  const renderItem = () => {
    return Object.keys(item).map((key, index) => {
      return (
        <View key={index}>
          <Text style={[Gutters.smallPadding, Fonts.textCenter, Fonts.body]}>
            {key}
            {key !== 'active' && ':'} {item[key]}
          </Text>
        </View>
      )
    })
  }

  return (
    <KeyboardAvoidingView
      style={[Layout.fill, Common.backgroundPrimary]}
      behavior={Platform.OS === 'ios' && 'padding'}
      enabled
      keyboardVerticalOffset={Platform.OS === 'ios' ? height * 0.09 : 0}
    >
      <ScrollView style={[Gutters.regularMargin]}>
        {loading ? <Loading size="large" /> : <Box>{renderItem()}</Box>}
        <View style={[Gutters.regularMargin]}>
          <Text style={[Fonts.headline, Fonts.textCenter]}>
            {t('taxesText.postForm.header')}
          </Text>
        </View>
        <DynamicForm
          editTaxAction={editTaxAction}
          imagePath={imagePath}
          editLoading={editLoading}
          setImagePath={setImagePath}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default TaxItemDetailView
