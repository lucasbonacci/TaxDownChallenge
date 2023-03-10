import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'

import { setDeleteMode } from '@/Store/Taxes'

const DeleteHeader = ({
  allSelecteds,
  deselectAllItems,
  selectAllItems,
  setShowDeleteModal,
  itemsSelecteds,
}) => {
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme()
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const desactiveDeleteMode = () => {
    dispatch(setDeleteMode(false))
  }

  const openModal = () => {
    if (itemsSelecteds.length) {
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
            onPress={allSelecteds ? deselectAllItems : selectAllItems}
          >
            <Text style={[Fonts.headline]}>
              {allSelecteds
                ? t('deleteHeader.deleteMode.deselectAllBtnLabel')
                : t('deleteHeader.deleteMode.selectAllBtnLabel')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={openModal}>
            <Text style={[Fonts.headline, Gutters.regularHMargin]}>
              {t('deleteHeader.deleteMode.deleteBtnLabel')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default DeleteHeader

DeleteHeader.propTypes = {
  allSelecteds: PropTypes.number,
  deselectAllItems: PropTypes.func,
  selectAllItems: PropTypes.func,
  setShowDeleteModal: PropTypes.func,
  itemsSelecteds: PropTypes.array,
}

DeleteHeader.defaultProps = {
  allSelecteds: 0,
  deselectAllItems: () => {},
  selectAllItems: () => {},
  setShowDeleteModal: () => {},
  itemsSelecteds: [],
}
