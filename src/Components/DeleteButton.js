import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { useTheme } from '@/Hooks'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { setDeleteMode } from '@/Store/Taxes'

const DeleteButton = () => {
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme()
  const dispatch = useDispatch()

  const activeDeleteMode = () => {
    dispatch(setDeleteMode(true))
  }

  return (
    <TouchableOpacity onPress={activeDeleteMode}>
      <View
        style={
          (Layout.alignItemsCenter,
          Gutters.regularVPadding,
          Gutters.regularHPadding)
        }
      >
        <FontAwesomeIcon icon={faTrash} size={20} color={Colors.darker} />
      </View>
    </TouchableOpacity>
  )
}

export default DeleteButton
