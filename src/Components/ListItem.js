import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { useTheme } from '@/Hooks'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSquare, faSquareCheck } from '@fortawesome/free-solid-svg-icons'

const ListItem = ({
  item,
  lastItem,
  deleteMode,
  selectTaxes,
  taxesSelecteds,
}) => {
  const { Layout, Gutters, Colors } = useTheme()

  return (
    <View
      style={[
        Layout.row,
        Layout.justifyContentBetween,
        Layout.alignItemsCenter,
        Gutters.regularPadding,
        !lastItem && {
          borderBottomWidth: 1,
          borderColor: Colors.blue5,
        },
      ]}
    >
      <View style={[Layout.row, Layout.alignItemsCenter]}>
        {deleteMode && (
          <CheckBox
            checkedIcon={
              <FontAwesomeIcon
                icon={faSquareCheck}
                size={23}
                color={Colors.primary}
              />
            }
            uncheckedIcon={
              <FontAwesomeIcon icon={faSquare} size={23} color={Colors.gray3} />
            }
            containerStyle={{ margin: 0, padding: 0 }}
            checked={taxesSelecteds?.includes(item.id)}
            onPress={() => selectTaxes(item.id)}
          />
        )}
        <Text>{item.name}</Text>
      </View>
      <View style={[Layout.row, Layout.justifyContentBetween]}>
        <Text>{item.year}</Text>
      </View>
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
