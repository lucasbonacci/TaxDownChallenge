import React from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
} from 'react-native'
import { Button, Input, PasswordInput } from '@/Components'
import { EMAIL_REG_EXP } from '@/Constants'
import { useForm, Controller } from 'react-hook-form'
import { useTheme } from '@/Hooks'
import { useTranslation } from 'react-i18next'
import { navigate } from '@/Navigators/utils'
import { SVG } from '@/Assets/svg/index.js'

const { height } = Dimensions.get('window')

const LoginView = ({ loginAction, loading }) => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onSubmit',
  })

  const submit = async values => {
    loginAction(values)
  }

  return (
    <KeyboardAvoidingView
      style={[Layout.fill, Common.backgroundPrimary]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled
      keyboardVerticalOffset={Platform.OS === 'ios' ? height * 0.05 : 0}
    >
      <ScrollView contentContainerStyle={[Gutters.smallHPadding]}>
        <View style={[Layout.alignItemsCenter, Gutters.largeVMargin]}>
          <SVG.Logo height={150} width={300} fillColor="none" />
        </View>
        <View style={[Gutters.smallVPadding, Layout.fullWidth]}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onChangeText={value => onChange(value.replace(/\s+/g, ''))}
                onBlur={onBlur}
                placeholder={t('loginScreen.emailPlaceholder')}
                label={t('loginScreen.emailInput')}
                editable={true}
                keyboardType={'email-address'}
                ColorLabel={Colors.gray3}
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
              required: t('loginScreen.errorMessages.email.required'),
              pattern: {
                value: EMAIL_REG_EXP,
                message: t('loginScreen.errorMessages.email.valid'),
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
                placeholder={t('loginScreen.passwordPlaceholder')}
                label={t('loginScreen.passwordInput')}
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
              required: t('loginScreen.errorMessages.pass.required'),
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
        <View style={[Gutters.regularVMargin]}>
          <Button
            title={t('loginScreen.loginBtnLabel')}
            onPress={handleSubmit(submit)}
            loading={loading}
            disabled={loading}
          />
        </View>
        <TouchableOpacity onPress={() => navigate('CreateAccount')}>
          <Text style={[Fonts.textCenter, Gutters.tinyVPadding]}>
            {t('loginScreen.signUpBtnLabel')}
            <Text style={[Fonts.textLink]}>
              {t('loginScreen.signUpBtnLabelTwo')}
            </Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default LoginView
