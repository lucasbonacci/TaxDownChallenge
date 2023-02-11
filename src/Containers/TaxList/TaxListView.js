import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { useTheme } from '@/Hooks'
import {
  Tabs,
  Box,
  ListItem,
  Loading,
  SearchInput,
  SelectInput,
  DeleteModal,
  DeleteHeader,
} from '@/Components'
import { useTranslation } from 'react-i18next'

const TaxListView = ({
  activeTab,
  itemsTab,
  list,
  loading,
  ageOptions,
  yearOptions,
  selectedValueYear,
  setSelectedValueYear,
  selectedValueAge,
  setSelectedValueAge,
  search,
  setSearch,
  itemsTabSelects,
  activeTabSelect,
  deleteTaxAction,
  deleteMode,
  deselectAllTaxes,
  selectAllTaxes,
  taxesSelecteds,
  selectTaxes,
  setShowDeleteModal,
  showDeleteModal,
  dispatchDeletesActions,
  deleteLoading,
}) => {
  const { Common, Gutters, Layout, Fonts } = useTheme()
  const { t } = useTranslation()

  return (
    <View
      style={[
        Layout.fill,
        Common.backgroundPrimary,
        deleteMode && Gutters.largeBPadding,
      ]}
    >
      {deleteMode && (
        <DeleteHeader
          allSelecteds={list.length == taxesSelecteds.length}
          taxesSelecteds={taxesSelecteds}
          deselectAllTaxes={deselectAllTaxes}
          selectAllTaxes={selectAllTaxes}
          setShowDeleteModal={setShowDeleteModal}
        />
      )}
      <View style={[Gutters.regularPadding]}>
        <ScrollView>
          {deleteMode && (
            <Text style={[Fonts.headline]}>
              {t('taxesText.deleteMode.headerDeleteMode', {
                checkedItemsCount: taxesSelecteds.length,
              })}
            </Text>
          )}

          <View style={[Gutters.regularVPadding]}>
            <Tabs activeId={activeTab} items={itemsTab} />
          </View>
          <View style={[Gutters.smallVPadding]}>
            <Tabs
              activeId={activeTabSelect}
              items={itemsTabSelects}
              label={'filter by'}
            />
          </View>

          {activeTabSelect === 'age' && (
            <SelectInput
              label="Age"
              options={ageOptions}
              defaultOption={selectedValueAge}
              setOption={setSelectedValueAge}
              style={Gutters.regularBMargin}
            />
          )}

          {activeTabSelect === 'year' && (
            <SelectInput
              label="Year"
              options={yearOptions}
              defaultOption={selectedValueYear}
              setOption={setSelectedValueYear}
              style={Gutters.regularBMargin}
            />
          )}
          <View style={[Gutters.regularBPadding]}>
            <SearchInput value={search} setValue={setSearch} />
          </View>
          <Box>
            {loading ? (
              <Loading />
            ) : list?.length === 0 ? (
              <Text style={[Fonts.headline, Fonts.textCenter]}>
                {t('taxesText.labels.noFounded')}
              </Text>
            ) : (
              list?.map((item, index) => {
                return (
                  <View key={index} index={index}>
                    <ListItem
                      item={item}
                      lastItem={index === list.length - 1}
                      deleteMode={deleteMode}
                      selectTaxes={selectTaxes}
                      taxesSelecteds={taxesSelecteds}
                    />
                  </View>
                )
              })
            )}
          </Box>
        </ScrollView>
      </View>
      <DeleteModal
        showDeleteModal={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}
        dispatchDeletesActions={dispatchDeletesActions}
        deleteLoading={deleteLoading}
      />
    </View>
  )
}

export default TaxListView
