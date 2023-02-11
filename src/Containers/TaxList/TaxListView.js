import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { useTheme } from '@/Hooks'
import { Tabs, Box, ListItem, Loading } from '@/Components'

const TaxListView = ({ activeTab, itemsTab, list, loading }) => {
  const { Common, Gutters, Layout, Colors } = useTheme()

  return (
    <View
      style={[Layout.fill, Common.backgroundPrimary, Gutters.regularPadding]}
    >
      <View style={[Gutters.regularVPadding]}>
        <Tabs activeId={activeTab} items={itemsTab} />
      </View>
      <ScrollView>
        <Box>
          {loading ? (
            <Loading />
          ) : list.length === 0 ? (
            <Text style={[Fonts.headline, Fonts.textCenter]}>
              {t('taxesText.labels.noFounded')}
            </Text>
          ) : (
            list?.map((item, index) => {
              return (
                <View key={index} index={index}>
                  <ListItem item={item} lastItem={index === list.length - 1} />
                </View>
              )
            })
          )}
        </Box>
      </ScrollView>
    </View>
  )
}

export default TaxListView
