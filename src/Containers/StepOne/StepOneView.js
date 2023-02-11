import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { useTheme } from '@/Hooks'
import { Tabs, Box, ListItem } from '@/Components'

const StepOneView = ({ activeTab, itemsTab, inactiveTaxes, activeTaxes }) => {
  const { Common, Gutters, Layout, Colors } = useTheme()

  return (
    <ScrollView
      style={[Layout.fill, Common.backgroundPrimary]}
      contentContainerStyle={[Layout.fill, Gutters.smallHPadding]}
    >
      <View style={[Gutters.regularVPadding]}>
        <Tabs activeId={activeTab} items={itemsTab} />
      </View>
      <Box>
        <ListItem
          items={activeTab === 'activeTaxes' ? activeTaxes : inactiveTaxes}
        />
      </Box>
    </ScrollView>
  )
}

export default StepOneView
