import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  TaxListContainer,
  AddTaxContainer,
  LogoutContainer,
} from '@/Containers'
import { ShareButton, DeleteButton } from '@/Components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useTranslation } from 'react-i18next'
import {
  faRightFromBracket,
  faPlus,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '@/Hooks'
import { useSelector } from 'react-redux'
import { SVG } from '@/Assets/svg/index.js'

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  const { Fonts, Colors, Layout, Gutters } = useTheme()
  const { t } = useTranslation()
  const { deleteMode } = useSelector(({ taxes }) => taxes)
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard"
        component={TaxListContainer}
        options={{
          headerShown: !deleteMode,
          tabBarShowLabel: false,
          gestureEnabled: false,
          title: t('headerTitles.Dashboard'),
          headerLeft: () => (
            <ShareButton message={t('shareMessages.inviteToKnowTheApp')} />
          ),
          headerRight: () => <DeleteButton />,
          tabBarIcon: ({ focused, size }) => (
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size={size}
              color={focused ? Colors.primary : Colors.lcGray}
            />
          ),
        }}
      />

      <Tab.Screen
        name="AddTax"
        component={AddTaxContainer}
        options={{
          headerShown: true,
          tabBarShowLabel: false,
          gestureEnabled: false,
          title: t('headerTitles.addTax'),
          tabBarIcon: ({ focused, size }) => (
            <FontAwesomeIcon
              icon={faPlus}
              size={size}
              color={focused ? Colors.primary : Colors.lcGray}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Logout"
        component={LogoutContainer}
        options={{
          headerShown: true,
          tabBarShowLabel: false,
          gestureEnabled: false,
          title: t('headerTitles.Logout'),
          tabBarIcon: ({ focused, size }) => (
            <FontAwesomeIcon
              icon={faRightFromBracket}
              size={size}
              color={focused ? Colors.primary : Colors.lcGray}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default MainNavigator
