import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, Platform } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/pro-solid-svg-icons'
import { useTheme } from '@/Hooks'
import { MEDIUM_PASSWORD_REG_EXP, STRONG_PASSWORD_REG_EXP } from '@/Constants'
import Input from './Input'

const PasswordInput = ({ showSuggestion, value, style = {}, ...rest }) => {
  const { Colors, Layout, Gutters, Fonts } = useTheme()
  const [showPassword, setShowPassword] = useState(false)
  const [securityLevel, setSecurityLevel] = useState(0)

  useEffect(() => {
    if (STRONG_PASSWORD_REG_EXP.test(value)) {
      setSecurityLevel(3)
    } else if (MEDIUM_PASSWORD_REG_EXP.test(value)) {
      setSecurityLevel(2)
    } else if (value && value.length > 0) {
      setSecurityLevel(1)
    } else {
      setSecurityLevel(0)
    }
  }, [value])

  return (
    <View>
      <Input
        {...rest}
        value={value}
        secureTextEntry={!showPassword}
        style={[Layout.relative, style]}
        rightIcon={
          <TouchableOpacity
            onPress={() => setShowPassword(s => !s)}
            style={[Gutters.regularPadding]}
            activeOpacity={0.5}
            underlayColor={Colors.transparent}
          >
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              size={20}
              color={Colors.gray3}
            />
          </TouchableOpacity>
        }
      />
      {showSuggestion && value && (
        <View style={[Gutters.tinyHPadding]}>
          <View
            style={[
              Layout.row,
              Layout.justifyContentBetween,
              Gutters.tinyVPadding,
            ]}
          >
            <View
              style={[
                Layout.column,
                {
                  borderRadius: 3,
                  backgroundColor:
                    securityLevel === 3
                      ? Colors.primary
                      : securityLevel === 2
                      ? Colors.warning
                      : securityLevel === 1
                      ? Colors.error
                      : Colors.gray4,
                  height: 6.5,
                  width: '31%',
                },
              ]}
            ></View>
            <View
              style={[
                Layout.column,
                {
                  borderRadius: 3,
                  backgroundColor:
                    securityLevel === 3
                      ? Colors.primary
                      : securityLevel === 2
                      ? Colors.warning
                      : Colors.gray4,
                  height: 6.5,
                  width: '31%',
                },
              ]}
            ></View>
            <View
              style={[
                Layout.column,
                {
                  borderRadius: 3,
                  backgroundColor:
                    securityLevel === 3 ? Colors.primary : Colors.gray4,
                  height: 6.5,
                  width: '31%',
                },
              ]}
            ></View>
          </View>
          {securityLevel === 1 && (
            <Text style={[Fonts.caption, Fonts.textDanger, Fonts.textRight]}>
              YOUR PASSWORD IS WEAK
            </Text>
          )}

          {securityLevel === 2 && (
            <Text style={[Fonts.caption, Fonts.textWarning, Fonts.textRight]}>
              YOUR PASSWORD IS NOT SECURE ENOUGH
            </Text>
          )}

          {securityLevel === 3 && (
            <Text style={[Fonts.caption, Fonts.textPrimary, Fonts.textRight]}>
              YOUR PASSWORD IS SECURE
            </Text>
          )}

          {(securityLevel === 1 || securityLevel === 2) && (
            <Text
              style={[Fonts.caption, Fonts.textRight, { color: Colors.gray2 }]}
            >
              Make sure your password has numbers one capital letter and one
              symbol
            </Text>
          )}
        </View>
      )}
    </View>
  )
}

PasswordInput.propTypes = {
  showSuggestion: PropTypes.bool,
}

PasswordInput.defaultProps = {
  showSuggestion: false,
}

export default PasswordInput
