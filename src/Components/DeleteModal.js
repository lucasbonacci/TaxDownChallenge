import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Button, Modal } from '@/Components'
import { useTheme } from '@/Hooks'
import { useTranslation } from 'react-i18next'

const DeleteModal = ({
  showDeleteModal,
  setShowDeleteModal,
  dispatchDeletesActions,
  deleteLoading,
}) => {
  const { Common, Gutters, Layout, Fonts, Colors } = useTheme()
  const { t } = useTranslation()

  return (
    <Modal modalVisible={showDeleteModal} setModalVisible={setShowDeleteModal}>
      <View style={[Gutters.smallHMargin]}>
        <Text style={[Fonts.headline, Gutters.smallVPadding]}>
          {t('taxesText.deleteMode.modal.header')}
        </Text>

        <View style={[Gutters.regularVMargin]}>
          <View style={[Layout.column, Gutters.tinyRPadding]}>
            <Button
              title={t('taxesText.deleteMode.modal.confirmBtn')}
              variant="primary"
              onPress={dispatchDeletesActions}
              loading={deleteLoading}
              disabled={deleteLoading}
            />
          </View>
          <TouchableOpacity
            style={[Gutters.regularVPadding]}
            onPress={() => setShowDeleteModal(false)}
          >
            <Text
              style={[
                Fonts.textCenter,
                Fonts.buttonLink,
                { color: Colors.primary },
              ]}
            >
              {t('taxesText.deleteMode.modal.cancelBtn')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default DeleteModal
