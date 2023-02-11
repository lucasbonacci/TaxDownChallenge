import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TextInput } from 'react-native'
import { useTheme } from '@/Hooks'

const Input = ({
  label,
  ColorLabel,
  onBlur,
  hasError,
  rightIcon,
  leftIcon,
  style = {},
  ...rest
}) => {
  const { Layout, Fonts, Common, Colors, Gutters } = useTheme()
  const [borderColor, setBorderColor] = useState(Colors.gray3)

  useEffect(() => {
    setBorderColor(hasError ? Colors.error : Colors.gray3)
  }, [hasError])

  return (
    <View>
      {!!label && label.length > 0 && (
        <Text
          style={[
            Fonts.bodyAlt,
            Gutters.tinyHPadding,
            Gutters.tinyBPadding,
            { color: ColorLabel },
          ]}
        >
          {label}
        </Text>
      )}
      <View style={[Layout.fullWidth, { position: 'relative' }]}>
        <TextInput
          {...rest}
          placeholderTextColor={Colors.blue5}
          style={[
            Common.textInput,
            { borderColor, ...style },
            leftIcon && { paddingLeft: 30 },
          ]}
          onFocus={() => {
            setBorderColor(Colors.primary)
          }}
          onBlur={evt => {
            setBorderColor(hasError ? Colors.error : Colors.lcWhite)

            onBlur(evt)
          }}
        />
        {!!leftIcon && (
          <View style={{ position: 'absolute', left: 10, top: 12, zIndex: 10 }}>
            {leftIcon}
          </View>
        )}
        {!!rightIcon && (
          <View
            style={{
              position: 'absolute',
              right: 10,
              top: 0,
              bottom: 0,
              margin: 'auto',
              zIndex: 99,
            }}
          >
            <View
              style={{
                height: '100%',
                justifyContent: 'center',
              }}
            >
              {rightIcon}
            </View>
          </View>
        )}
      </View>
    </View>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  hasError: PropTypes.bool,
  rightIcon: PropTypes.object,
  leftIcon: PropTypes.object,
}

Input.defaultProps = {
  label: '',
  hasError: false,
  onBlur: () => {},
}

export default Input
