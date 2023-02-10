import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ExampleContainer, StepOneContainer } from '@/Containers'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
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

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard1"
        component={StepOneContainer}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          gestureEnabled: false,
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
        name="Dashboard2"
        component={ExampleContainer}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          gestureEnabled: false,
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
        name="Dashboard3"
        component={ExampleContainer}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          gestureEnabled: false,
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
