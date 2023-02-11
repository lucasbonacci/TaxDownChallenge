import React from 'react'
import { View, ScrollView } from 'react-native'
import { useTheme } from '@/Hooks'
import { Tabs, Box, ListItem, Loading } from '@/Components'

const TaxListView = ({
  activeTab,
  itemsTab,
  inactiveTaxesList,
  activeTaxesList,
  loading,
}) => {
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
        {loading ? (
          <Loading />
        ) : (
          <ListItem
            items={
              activeTab === 'activeTaxes' ? activeTaxesList : inactiveTaxesList
            }
          />
        )}
      </Box>
    </ScrollView>
  )
}

export default TaxListView
