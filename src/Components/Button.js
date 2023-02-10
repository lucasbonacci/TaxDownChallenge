import React from 'react'
import PropTypes from 'prop-types'
import { TouchableHighlight, View, Text, ActivityIndicator } from 'react-native'
import { useTheme } from '@/Hooks'

const Button = ({
  title,
  icon,
  variant,
  loading,
  disabled,
  style,
  ...rest
}) => {
  const { Common, Layout, Colors, Fonts } = useTheme()
  const styles = {
    primary: {
      button: Common.button,
      buttonText: Common.buttonText,
    },
    secundary: {
      button: { ...Common.button, backgroundColor: Colors.secundary },
      buttonText: Common.buttonText,
    },
    default: {
      button: Common.defaultButton,
      buttonText: Common.defaultButtonText,
    },
  }

  const loadingColor = {
    primary: Colors.white,
    default: Colors.darker,
  }

  const v = variant || 'primary'

  return (
    <TouchableHighlight
      {...rest}
      activeOpacity={0.3}
      underlayColor={styles[v].button}
      style={[styles[v].button, disabled ? Common.disabled : {}, style]}
      disabled={disabled || loading}
    >
      {!loading ? (
        <View style={[Layout.center, Layout.fullWidth]}>
          {!!icon && icon}
          {!!title && <Text style={styles[v].buttonText}>{title}</Text>}
        </View>
      ) : (
        <ActivityIndicator
          size="small"
          style={[Layout.fullWidth]}
          color={loadingColor[v]}
        />
      )}
    </TouchableHighlight>
  )
}

export default Button
