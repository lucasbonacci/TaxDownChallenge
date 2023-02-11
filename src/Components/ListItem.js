import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

import { useTheme } from '@/Hooks'

const ListItem = ({ items }) => {
  const { Layout, Gutters, Colors } = useTheme()

  return items.map((item, index) => {
    return (
      <View
        key={index}
        style={[
          Layout.row,
          Layout.justifyContentBetween,
          Gutters.regularPadding,
          index !== items.length - 1 && {
            borderBottomWidth: 1,
            borderColor: Colors.blue5,
          },
        ]}
      >
        <Text>{item.name}</Text>
        <Text>{item.year}</Text>
      </View>
    )
  })
}

export default ListItem

ListItem.propTypes = {
  items: PropTypes.array,
}

ListItem.defaultProps = {
  items: [],
}
