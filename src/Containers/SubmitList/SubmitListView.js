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

const SubmitListView = ({
  submissionList,
  loading,
  ageOptions,
  selectedValueAge,
  setSelectedValueAge,
  search,
  setSearch,
  itemsTabSelects,
  activeTabSelect,
  deleteMode,
  deselectAllSubmissions,
  selectAllSubmissions,
  selectSubmissions,
  setShowDeleteModal,
  showDeleteModal,
  dispatchDeletesActions,
  deleteLoading,
  submissionsSelecteds,
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
          allSelecteds={submissionList.length == submissionsSelecteds.length}
          itemsSelecteds={submissionsSelecteds}
          deselectAllItems={deselectAllSubmissions}
          selectAllItems={selectAllSubmissions}
          setShowDeleteModal={setShowDeleteModal}
        />
      )}
      <View style={[Gutters.regularPadding]}>
        <ScrollView>
          {deleteMode && (
            <Text style={[Fonts.headline]}>
              {t('taxListScreen.deleteMode.headerDeleteMode', {
                checkedItemsCount: submissionsSelecteds.length,
              })}
            </Text>
          )}

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

          <View style={[Gutters.regularBPadding]}>
            <SearchInput value={search} setValue={setSearch} />
          </View>
          <Box>
            {loading ? (
              <Loading />
            ) : submissionList?.length === 0 ? (
              <Text style={[Fonts.headline, Fonts.textCenter]}>
                {t('taxListScreen.labels.noFounded')}
              </Text>
            ) : (
              submissionList?.map((item, index) => {
                return (
                  <View key={index} index={index}>
                    <ListItem
                      item={item}
                      lastItem={index === submissionList.length - 1}
                      deleteMode={deleteMode}
                      selectItem={selectSubmissions}
                      itemsSelecteds={submissionsSelecteds}
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

export default SubmitListView
