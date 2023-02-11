import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { useTheme } from '@/Hooks'

const BoxComponent = ({ backgroundColor, children }) => {
  const { Colors, Layout } = useTheme()

  return (
    <View
      style={[
        Layout.justifyContentCenter,
        Layout.alignContentCenter,
        {
          shadowColor: Colors.gray3,
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.33,
          shadowRadius: 5.62,
          elevation: 6,
          borderRadius: 12,
          padding: 3,
          margin: 1,
          minHeight: 70,
          backgroundColor,
        },
      ]}
    >
      {children}
    </View>
  )
}

BoxComponent.propTypes = {
  backgroundColor: PropTypes.string,
}

BoxComponent.defaultProps = {
  backgroundColor: 'white',
}

export default BoxComponent
