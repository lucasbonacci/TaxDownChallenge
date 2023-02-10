import React, { useEffect } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'

import {
  LoginContainer,
  CreateAccountContainer,
  LoadingView,
} from '@/Containers'
import { useTheme } from '@/Hooks'
import MainNavigator from './Main'
import { VerifyAuthState } from '@/Store/Auth'
import { navigationRef } from './utils'
import { BackButton } from '@/Components'
import { SVG } from '@/Assets/svg/index.js'

const Stack = createStackNavigator()

// @refresh reset
const ApplicationNavigator = () => {
  const dispatch = useDispatch()
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme

  const onAuthStateChanged = user => {
    dispatch(VerifyAuthState(user))
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber // unsubscribe on unmount
  }, [])

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="LoadingView"
            component={LoadingView}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              gestureEnabled: false,
            }}
          />

          <Stack.Screen
            name="Login"
            component={LoginContainer}
            options={{
              animationEnabled: false,
            }}
          />

          <Stack.Screen
            name="CreateAccount"
            component={CreateAccountContainer}
            options={({ navigation }) => {
              return {
                headerShown: true,
                tabBarShowLabel: false,
                title: '',
                headerLeft: props => <BackButton navigation={navigation} />,
                headerRight: () => (
                  <SVG.Logo height={150} width={150} fillColor="none" />
                ),
              }
            }}
          />
          <Stack.Screen name="Main" component={MainNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigator
