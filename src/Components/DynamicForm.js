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
  onSubmit,
  form,
}) => {
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme()
  const { t } = useTranslation()

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onSubmit',
  })

  const submit = async values => {
    onSubmit(values)
    reset()
  }

  return (
    <View>
      {form.map((item, index) => {
        if (item.type === 'text' || item.type === 'number') {
          return (
            <View key={index} style={[Gutters.smallVPadding, Layout.fullWidth]}>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onChangeText={onChange}
                    onBlur={onBlur}
                    label={item.label}
                    placeholder={item.placeholder}
                    editable={true}
                    keyboardType={item.type === 'text' ? 'default' : 'numeric'}
                    ColorLabel={Colors.gray3}
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    maxLength={item.maxLength}
                    value={value}
                    selectTextOnFocus
                    hasError={!!errors.name}
                  />
                )}
                name={item.id}
                //   rules={{
                //     required: t(`taxesText.errorMessages.${name}`),
                //   }}
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
          )
        }
        if (item.type === 'picture') {
          return (
            <OpenCamera setImagePath={setImagePath} imagePath={imagePath} />
          )
        }
      })}

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
