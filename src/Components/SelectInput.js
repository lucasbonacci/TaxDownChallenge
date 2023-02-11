import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Platform } from 'react-native'
import { useTheme } from '@/Hooks'
import { Picker } from '@react-native-picker/picker'

const SelectInput = ({ options, defaultOption, setOption, label, style }) => {
  const { Layout, Fonts, Common, Colors, Gutters } = useTheme()

  return (
    <View style={style}>
      {!!label && label.length > 0 && (
        <Text style={[Fonts.headline, Gutters.tinyPadding]}>{label}</Text>
      )}
      <View
        style={[
          {
            backgroundColor: Colors.lcWhite,
            borderRadius: 10,
            overflow: 'hidden',
          },
          Layout.justifyContentCenter,
          Gutters.smallHPadding,
        ]}
      >
        <Picker
          itemStyle={
            Platform.OS === 'ios' && {
              height: 130,
              marginTop: -30,
            }
          }
          selectedValue={defaultOption}
          onValueChange={(itemValue, itemIndex) => setOption(itemValue)}
          style={[
            Common.textInput,
            Platform.OS === 'ios' && { height: 100, padding: 0 },
          ]}
          dropdownIconColor={Colors.darker}
        >
          {options.map((o, key) => (
            <Picker.Item label={o.label} value={o.value} key={key} />
          ))}
        </Picker>
      </View>
    </View>
  )
}

SelectInput.propTypes = {
  options: PropTypes.array,
  defaultOption: PropTypes.string,
  setOption: PropTypes.func,
  style: PropTypes.object,
}

SelectInput.defaultProps = {
  label: '',
  options: [],
  defaultOption: '',
  setOption: () => {},
  style: {},
}

export default SelectInput
