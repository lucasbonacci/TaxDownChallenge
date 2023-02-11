import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableHighlight, Text } from 'react-native'
import { useTheme } from '@/Hooks'

const TabsComponent = ({ items, activeId, label, ...rest }) => {
  const { Layout, Common, Gutters } = useTheme()

  return (
    <View>
      {!!label && <Text style={[Gutters.tinyBPadding]}>{label}:</Text>}
      <View style={[Layout.row, Common.tabContainer, { width: '100%' }]}>
        {items.map(({ id, title, action }, key) => (
          <View
            style={[Layout.colCenter, { width: `${100 / items.length}%` }]}
            key={key}
          >
            <TouchableHighlight
              activeOpacity={0.3}
              underlayColor={Common.defaultButton}
              style={[
                Common.defaultButton,
                id === activeId ? Common.lightButton : Common.linkButton,
              ]}
              onPress={action}
            >
              <Text style={[Common.regularDefaultButtonText]}>{title}</Text>
            </TouchableHighlight>
          </View>
        ))}
      </View>
    </View>
  )
}

TabsComponent.propTypes = {
  items: PropTypes.array,
  activeId: PropTypes.string,
}

TabsComponent.defaultProps = {
  items: [],
  activeId: '',
}

export default TabsComponent
