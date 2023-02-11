import { showMessage } from 'react-native-flash-message'

const styleShadows = {
  shadowColor: '#1C1C1E',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 10,
  elevation: 10,
  borderBottomLeftRadius: 12,
  borderBottomRightRadius: 12,
}

const styleText = {
  color: '#FEFEFE',
  fontSize: 13,
  fontWeight: '500',
}

export const AlertSuccess = (data = 'Success') => {
  showMessage({
    message: `${data}`,
    type: 'success',
    icon: 'success',
    backgroundColor: '#00dc5a',
    style: styleShadows,
    titleStyle: styleText,
  })
}

export const AlertError = (data = 'Error') => {
  showMessage({
    message: `${data}`,
    type: 'danger',
    icon: 'danger',
    backgroundColor: '#FF3B30',
    style: styleShadows,
    titleStyle: styleText,
  })
}
