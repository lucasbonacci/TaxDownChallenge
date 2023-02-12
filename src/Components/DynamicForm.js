import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { useTheme } from '@/Hooks'
import { Box, Loading, Input, Button, OpenCamera } from '@/Components'
import { useTranslation } from 'react-i18next'
import { useForm, Controller } from 'react-hook-form'

const DynamicForm = ({
  setImagePath,
  imagePath,
  editLoading,
  editTaxAction,
}) => {
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme()
  const { t } = useTranslation()

  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    setError,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onSubmit',
  })

  const submit = async values => {
    let age = parseInt(values.age)
    if (age <= 100 && age >= 0) {
      editTaxAction(values)
      setImagePath(null)
      reset()
    } else {
      setError('age', { message: 'Year must be between 0 and 100' })
    }
  }

  return (
    <View>
      <View style={[Gutters.smallVPadding, Layout.fullWidth]}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onChangeText={onChange}
              onBlur={onBlur}
              label={t('taxesText.postForm.label.name')}
              placeholder={t('taxesText.postForm.placeholder.name')}
              editable={true}
              keyboardType={'default'}
              ColorLabel={Colors.gray3}
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
              maxLength={40}
              value={value}
              selectTextOnFocus
              hasError={!!errors.name}
            />
          )}
          name="name"
          rules={{
            required: t('taxesText.errorMessages.name.required'),
          }}
        />
        {errors.name && (
          <Text
            style={[
              Gutters.tinyHPadding,
              Gutters.tinyTMargin,
              { color: Colors.error },
            ]}
          >
            {errors?.name?.message}
          </Text>
        )}
      </View>
      <View style={[Gutters.smallVPadding, Layout.fullWidth]}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onChangeText={onChange}
              onBlur={onBlur}
              label={t('taxesText.postForm.label.surname')}
              placeholder={t('taxesText.postForm.placeholder.surname')}
              editable={true}
              keyboardType={'default'}
              ColorLabel={Colors.gray3}
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
              maxLength={40}
              value={value}
              selectTextOnFocus
              hasError={!!errors.surname}
            />
          )}
          name="surname"
          rules={{
            required: t('taxesText.errorMessages.surname.required'),
          }}
        />
        {errors.surname && (
          <Text
            style={[
              Gutters.tinyHPadding,
              Gutters.tinyTMargin,
              { color: Colors.error },
            ]}
          >
            {errors?.surname?.message}
          </Text>
        )}
      </View>
      <View style={[Gutters.smallVPadding, Layout.fullWidth]}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onChangeText={value => onChange(value.replace(/\s+/g, ''))}
              onBlur={onBlur}
              label={t('taxesText.postForm.label.age')}
              placeholder={t('taxesText.postForm.placeholder.age')}
              editable={true}
              keyboardType={'numeric'}
              ColorLabel={Colors.gray3}
              returnKeyType="next"
              maxLength={3}
              autoCapitalize="none"
              autoCorrect={false}
              value={value}
              selectTextOnFocus
              hasError={!!errors.age}
            />
          )}
          name="age"
          rules={{
            required: t('taxesText.errorMessages.age.required'),
          }}
        />
        {errors.age && (
          <Text
            style={[
              Gutters.tinyHPadding,
              Gutters.tinyTMargin,
              { color: Colors.error },
            ]}
          >
            {errors?.age?.message}
          </Text>
        )}
      </View>
      <OpenCamera setImagePath={setImagePath} imagePath={imagePath} />
      <Button
        title={t('taxesText.postForm.submitBtn')}
        onPress={handleSubmit(submit)}
        loading={editLoading}
        disabled={editLoading}
      />
    </View>
  )
}

export default DynamicForm
