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
import { Box, Loading, DynamicForm, Button } from '@/Components'
import { useTranslation } from 'react-i18next'
import { navigate } from '@/Navigators/utils'

const { height } = Dimensions.get('window')

const TaxItemDetailView = ({
  loading,
  item,
  addSubmissionAction,
  imagePath,
  addSubmissionLoading,
  setImagePath,
  form,
  loadingForm,
}) => {
  const { Common, Gutters, Layout, Colors, Fonts } = useTheme()
  const { t } = useTranslation()

  const onSubmit = values => {
    addSubmissionAction(values)
    setImagePath(null)
  }

  const renderItem = () => {
    return Object.keys(item).map((key, index) => {
      if (!key.includes('form')) {
        return (
          <View key={index}>
            <Text style={[Gutters.smallPadding, Fonts.textCenter, Fonts.body]}>
              {key}
              {key !== 'active' && ':'} {item[key]}
            </Text>
          </View>
        )
      }
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
        <Button
          variant={'default'}
          title={t('taxDetailScreen.postForm.seeMyList')}
          onPress={() => navigate('SubmitList', { id: item.id })}
        />

        {loading ? <Loading size="large" /> : <Box>{renderItem()}</Box>}
        <View style={[Gutters.regularMargin]}>
          <Text style={[Fonts.headline, Fonts.textCenter]}>
            {t('taxDetailScreen.postForm.header')}
          </Text>
        </View>
        {loadingForm ? (
          <Loading size="large" />
        ) : (
          <DynamicForm
            imagePath={imagePath}
            addSubmissionLoading={addSubmissionLoading}
            setImagePath={setImagePath}
            form={form}
            onSubmit={onSubmit}
          />
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default TaxItemDetailView
