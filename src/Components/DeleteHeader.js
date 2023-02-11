import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'

import { setDeleteMode } from '@/Store/Taxes'

const DeleteHeader = ({
  allSelecteds,
  deselectAllTaxes,
  selectAllTaxes,
  setShowDeleteModal,
  taxesSelecteds,
}) => {
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme()
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const desactiveDeleteMode = () => {
    dispatch(setDeleteMode(false))
  }

  const openModal = () => {
    if (taxesSelecteds.length) {
      setShowDeleteModal(true)
    }
  }

  return (
    <>
      <View
        style={[
          Layout.row,
          Layout.justifyContentBetween,
          Layout.alignItemsCenter,
          Gutters.regularVPadding,
          Gutters.smallHPadding,
          {
            backgroundColor: Colors.white,
            shadowColor: '0px 1px 3px rgba(0, 0, 0, 0.15)',
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 0.3,
            shadowRadius: 3,
            elevation: 5,
          },
        ]}
      >
        <TouchableOpacity onPress={desactiveDeleteMode}>
          <FontAwesomeIcon icon={faXmark} size={20} color={Colors.darker} />
        </TouchableOpacity>
        <View style={[Layout.row, Layout.alignItemsCenter]}>
          <TouchableOpacity
            onPress={allSelecteds ? deselectAllTaxes : selectAllTaxes}
          >
            <Text style={[Fonts.headline]}>
              {allSelecteds
                ? t('taxesText.deleteMode.deselectAllBtnLabel')
                : t('taxesText.deleteMode.selectAllBtnLabel')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={openModal}>
            <Text style={[Fonts.headline, Gutters.regularHMargin]}>
              {t('taxesText.deleteMode.deleteBtnLabel')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default DeleteHeader
