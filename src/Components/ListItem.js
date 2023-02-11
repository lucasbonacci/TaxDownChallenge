import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

import { useTheme } from '@/Hooks'

const ListItem = ({ item, lastItem, index }) => {
  const { Layout, Gutters, Colors } = useTheme()

  return (
    <View
      style={[
        Layout.row,
        Layout.justifyContentBetween,
        Gutters.regularPadding,
        !lastItem && {
          borderBottomWidth: 1,
          borderColor: Colors.blue5,
        },
      ]}
    >
      <Text>{item.name}</Text>
      <Text>{item.year}</Text>
    </View>
  )
}

export default ListItem

ListItem.propTypes = {
  item: PropTypes.object,
}

ListItem.defaultProps = {
  items: {},
}
