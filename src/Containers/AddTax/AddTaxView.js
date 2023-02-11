import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { useTheme } from '@/Hooks'
import { Tabs, Button, ListItem, Loading, Input } from '@/Components'
import { useForm, Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
const AddTaxView = ({ isTaxActive, itemsTab, addTaxAction, loading }) => {
  const { Common, Gutters, Layout, Colors } = useTheme()
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
    let year = parseInt(values.year)
    if (year <= 2023 && year >= 1800) {
      addTaxAction(values)
      //reset()
    } else {
      setError('year', { message: 'Year must be between 1800 and 2023' })
    }
  }

  return (
    <View style={[Layout.fill, Common.backgroundPrimary]}>
      <ScrollView contentContainerStyle={[Layout.fill, Gutters.smallHPadding]}>
        <View style={[Gutters.smallVPadding, Layout.fullWidth]}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onChangeText={onChange}
                onBlur={onBlur}
                label={t('taxesText.addForm.name')}
                editable={true}
                keyboardType={'default'}
                ColorLabel={Colors.gray3}
                returnKeyType="next"
                autoCapitalize="none"
                autoCorrect={false}
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
                onChangeText={value => onChange(value.replace(/\s+/g, ''))}
                onBlur={onBlur}
                label={t('taxesText.addForm.year')}
                editable={true}
                keyboardType={'numeric'}
                ColorLabel={Colors.gray3}
                returnKeyType="next"
                maxLength={4}
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                selectTextOnFocus
                hasError={!!errors.year}
              />
            )}
            name="year"
            rules={{
              required: t('taxesText.errorMessages.year.required'),
            }}
          />
          {errors.year && (
            <Text
              style={[
                Gutters.tinyHPadding,
                Gutters.tinyTMargin,
                { color: Colors.error },
              ]}
            >
              {errors?.year?.message}
            </Text>
          )}
        </View>
        <View>
          <Text style={[Gutters.smallVPadding, { color: Colors.gray3 }]}>
            {t('taxesText.addForm.active')}
          </Text>
          <Tabs activeId={isTaxActive} items={itemsTab} />
        </View>
      </ScrollView>
      <View style={[Gutters.regularMargin]}>
        <Button
          title={t('taxesText.addForm.addBtn')}
          onPress={handleSubmit(submit)}
          loading={loading}
          disabled={loading}
        />
      </View>
    </View>
  )
}

export default AddTaxView
