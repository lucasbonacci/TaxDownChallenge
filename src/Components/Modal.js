import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Modal as ModalRN,
  TouchableOpacity,
  Platform,
} from 'react-native'
import { useTheme } from '@/Hooks'

/* Style constants */
const radius = 12
const bgModalColor = 'white'

const boxModalTypeNoneStyle = {
  width: '92%',
  minHeight: '20%',
  borderRadius: radius,
  backgroundColor: bgModalColor,
}

/* Modal Component */
const Modal = ({
  type,
  modalVisible,
  setModalVisible,
  children,
  backgroundColor,
}) => {
  const { Layout, Fonts, Common, Colors, Gutters } = useTheme()

  let modalStyle = boxModalTypeNoneStyle

  const backgroundTransparent = {
    backgroundColor: backgroundColor
      ? backgroundColor
      : Colors.transparentBlack,
  }

  return (
    <ModalRN
      animationType={type}
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={[Layout.fill, Layout.colCenter, backgroundTransparent]}>
        <View
          style={[
            modalStyle,
            Gutters.smallPadding,
            Layout.justifyContentCenter,
          ]}
        >
          {children}
        </View>
      </View>
    </ModalRN>
  )
}

Modal.propTypes = {
  type: PropTypes.string,
  modalVisible: PropTypes.bool,
  setModalVisible: PropTypes.func,
  closeButton: PropTypes.bool,
  title: PropTypes.string,
  colorTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

Modal.defaultProps = {
  type: 'none',
  modalVisible: false,
  setModalVisible: () => {},
  closeButton: false,
  title: '',
  colorTitle: 'darker',
  subtitle: '',
}

export default Modal
