import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  TaxListWithFiltersContainer,
  TaxListContainer,
  AddTaxContainer,
} from '@/Containers'
import { ShareButton } from '@/Components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useTranslation } from 'react-i18next'
import {
  faClipboardList,
  faPlus,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '@/Hooks'

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  const { Fonts, Colors, Layout, Gutters } = useTheme()
  const { t } = useTranslation()
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="fourthStep"
        component={TaxListWithFiltersContainer}
        options={{
          headerShown: true,
          tabBarShowLabel: false,
          gestureEnabled: false,
          title: t('headerTitles.fourthStep'),
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
        name="taxList"
        component={TaxListContainer}
        options={{
          headerShown: true,
          tabBarShowLabel: false,
          gestureEnabled: false,
          title: t('headerTitles.secondStep'),
          headerRight: () => (
            <ShareButton message={t('shareMessages.inviteToKnowTheApp')} />
          ),
          tabBarIcon: ({ focused, size }) => (
            <FontAwesomeIcon
              icon={faClipboardList}
              size={size}
              color={focused ? Colors.primary : Colors.lcGray}
            />
          ),
        }}
      />

      <Tab.Screen
        name="thirdStep"
        component={AddTaxContainer}
        options={{
          headerShown: true,
          tabBarShowLabel: false,
          gestureEnabled: false,
          title: t('headerTitles.thirdStep'),
          tabBarIcon: ({ focused, size }) => (
            <FontAwesomeIcon
              icon={faPlus}
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
