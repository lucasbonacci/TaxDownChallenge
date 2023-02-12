import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { useTheme } from '@/Hooks'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSquare, faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { navigate } from '@/Navigators/utils'

const ListItem = ({
  item,
  lastItem,
  deleteMode,
  selectItem,
  itemsSelecteds,
}) => {
  const { Layout, Gutters, Colors, Fonts } = useTheme()
  const textStyle = [Gutters.smallHPadding, Fonts.body]

  return (
    <TouchableOpacity
      onPress={
        deleteMode
          ? () => selectItem(item.id)
          : () => navigate('taxDetail', { item })
      }
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
            checked={itemsSelecteds?.includes(item.id)}
            disabled={true}
          />
        )}
        <Text>{item.name}</Text>
      </View>
      <View
        style={[
          Layout.row,
          Layout.justifyContentBetween,
          Layout.alignItemsCenter,
        ]}
      >
        {item.year && <Text style={textStyle}>{item.year}</Text>}
        {item.surname && <Text style={textStyle}>{item.surname}</Text>}
        {item.age && <Text style={textStyle}>{item.age}</Text>}
        {item.image && <Text style={textStyle}>{item.image.slice(0, 15)}</Text>}
      </View>
    </TouchableOpacity>
  )
}

export default ListItem

ListItem.propTypes = {
  item: PropTypes.object,
}

ListItem.defaultProps = {
  items: {},
}
