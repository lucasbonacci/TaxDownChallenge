import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import FlashMessage from 'react-native-flash-message'
import { store, persistor } from '@/Store'
import ApplicationNavigator from '@/Navigators/Application'
import './I18N'

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ApplicationNavigator />
      <FlashMessage position="top" duration={3000} />
    </PersistGate>
  </Provider>
)

export default App
