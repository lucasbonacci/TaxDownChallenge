import React from 'react'

import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
} from 'react-native'
import { Button, Input, PasswordInput } from '@/Components'
import { EMAIL_REG_EXP, STRONG_PASSWORD_REG_EXP } from '@/Constants'
import { useForm, Controller } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle } from '@fortawesome/pro-solid-svg-icons'
import { useTheme } from '@/Hooks'
import { useTranslation } from 'react-i18next'

const { height } = Dimensions.get('window')

const CreateAccountView = ({ createAccountAction, loading }) => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme()

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onSubmit',
    defaultValues: {
      email: 'lucas+9988@imajine.com',
      password: 'Lucas123!',
      repeatPassword: 'Lucas123!',
    },
  })

  const submit = async values => {
    createAccountAction(values)
  }

  const renderRequirements2 = () => {
    const passInfoItems = t('createAccountScreen.passRequirments')
    return passInfoItems.map((reqText, index) => {
      return (
        // eslint-disable-next-line react/no-array-index-key
        <View
          key={index}
          style={[
            Gutters.smallHPadding,
            Layout.row,
            Layout.alignItemsCenter,
            Gutters.tinyBPadding,
          ]}
        >
          <FontAwesomeIcon icon={faCircle} size={5} color={Colors.gray3} />
          <Text style={[Gutters.tinyLPadding, { color: Colors.gray3 }]}>
            {reqText}
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
      <ScrollView
        contentContainerStyle={[Gutters.smallHPadding, Gutters.regularVMargin]}
      >
        <Text
          style={[
            Fonts.headline,
            Fonts.textCenter,
            Fonts.textPrimary,
            Gutters.regularVMargin,
          ]}
        >
          {t('createAccountScreen.header')}
        </Text>
        <View style={[Gutters.smallVPadding, Layout.fullWidth]}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onChangeText={value => onChange(value.replace(/\s+/g, ''))}
                onBlur={onBlur}
                placeholder={t('createAccountScreen.fields.email.placeholder')}
                label={t('createAccountScreen.fields.email.label')}
                ColorLabel={Colors.gray3}
                editable={true}
                keyboardType={'email-address'}
                returnKeyType="next"
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                selectTextOnFocus
                hasError={!!errors.email}
              />
            )}
            name="email"
            rules={{
              required: t(
                'createAccountScreen.validation.errorMessages.email.required',
              ),
              pattern: {
                value: EMAIL_REG_EXP,
                message: t(
                  'createAccountScreen.validation.errorMessages.email.valid',
                ),
              },
            }}
          />
          {errors.email && (
            <Text
              style={[
                Gutters.tinyHPadding,
                Gutters.tinyTMargin,
                Fonts.textError,
              ]}
            >
              {errors?.email?.message}
            </Text>
          )}
        </View>
        <View style={[Gutters.smallVPadding, Layout.fullWidth]}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <PasswordInput
                onChangeText={value => onChange(value.replace(/\s+/g, ''))}
                onBlur={onBlur}
                placeholder={t('createAccountScreen.fields.pass.placeholder')}
                label={t('createAccountScreen.fields.pass.label')}
                ColorLabel={Colors.gray3}
                editable={true}
                keyboardType={'default'}
                returnKeyType="done"
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                selectTextOnFocus
                hasError={!!errors.password}
              />
            )}
            name="password"
            rules={{
              required: t(
                'createAccountScreen.validation.errorMessages.pass.required',
              ),
              pattern: {
                value: STRONG_PASSWORD_REG_EXP,
                message: t(
                  'createAccountScreen.validation.errorMessages.pass.validationError',
                ),
              },
            }}
          />
          {errors.password && (
            <Text
              style={[
                Gutters.tinyHPadding,
                Gutters.tinyTMargin,
                Fonts.textError,
              ]}
            >
              {errors?.password?.message}
            </Text>
          )}
        </View>
        <View style={[Gutters.smallVPadding, Layout.fullWidth]}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <PasswordInput
                onChangeText={value => onChange(value.replace(/\s+/g, ''))}
                onBlur={onBlur}
                placeholder={t(
                  'createAccountScreen.fields.repeatPass.placeholder',
                )}
                label={t('createAccountScreen.fields.repeatPass.label')}
                ColorLabel={Colors.gray3}
                editable={true}
                keyboardType={'default'}
                returnKeyType="done"
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                selectTextOnFocus
                hasError={!!errors.repeatPassword}
              />
            )}
            name="repeatPassword"
            rules={{
              required: 'Passwords must match',
              validate: {
                emailEqual: value =>
                  value === getValues().password || 'Passwords must match',
              },
            }}
          />
          {errors.repeatPassword && (
            <Text
              style={[
                Gutters.tinyHPadding,
                Gutters.tinyTMargin,
                Fonts.textError,
              ]}
            >
              {errors?.repeatPassword?.message}
            </Text>
          )}
        </View>

        {renderRequirements2()}
        <View style={[Gutters.regularVMargin]}>
          <Button
            title={t('createAccountScreen.submitBtnLabel')}
            onPress={handleSubmit(submit)}
            disabled={loading}
            loading={loading}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default CreateAccountView
