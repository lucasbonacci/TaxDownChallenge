import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ExampleContainer, StepOneContainer } from '@/Containers'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useTranslation } from 'react-i18next'
import {
  faCircle2,
  faCircle3,
  faCircle4,
} from '@fortawesome/pro-solid-svg-icons'
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
          tabBarIcon: ({ focused, size }) => (
            <FontAwesomeIcon
              icon={faCircle2}
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
              icon={faCircle3}
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
              icon={faCircle4}
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
