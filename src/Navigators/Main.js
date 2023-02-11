import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ExampleContainer, StepOneContainer } from '@/Containers'
import { ShareButton } from '@/Components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useTranslation } from 'react-i18next'
import { fa2, fa3, fa4 } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '@/Hooks'

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  const { Fonts, Colors, Layout, Gutters } = useTheme()
  const { t } = useTranslation()
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="secondStep"
        component={StepOneContainer}
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
              icon={fa2}
              size={size}
              color={focused ? Colors.primary : Colors.lcGray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="thirdStep"
        component={ExampleContainer}
        options={{
          headerShown: true,
          tabBarShowLabel: false,
          gestureEnabled: false,
          title: t('headerTitles.thirdStep'),
          tabBarIcon: ({ focused, size }) => (
            <FontAwesomeIcon
              icon={fa3}
              size={size}
              color={focused ? Colors.primary : Colors.lcGray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="fourthStep"
        component={ExampleContainer}
        options={{
          headerShown: true,
          tabBarShowLabel: false,
          gestureEnabled: false,
          title: t('headerTitles.fourthStep'),
          tabBarIcon: ({ focused, size }) => (
            <FontAwesomeIcon
              icon={fa4}
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
