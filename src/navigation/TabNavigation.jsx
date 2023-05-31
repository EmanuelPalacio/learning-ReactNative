import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View } from 'react-native'
import navRoutes from '../models/navigationRoutes'
import { InConstruction } from '../screens'
import theme from '../theme/theme'
import ProfileNavigation from './ProfileNavigation'
import {
  TabMenssage,
  TabComunity,
  TabLearning,
  TabProfile,
} from '../components/svgComponents'
import LearningNavigation from './LearningNavigation'

export default function TabNavigation() {
  const renderTabIcon = (focused, Component) => <Component focused={focused} />
  const Tab = createBottomTabNavigator()
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.color.primary,
      }}
    >
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 50,
            borderTopEndRadius: 50,
            borderTopStartRadius: 50,
            backgroundColor: theme.color.secondary,
          },
          tabBarLabelStyle: {
            fontSize: 13,
          },
          tabBarActiveTintColor: theme.colorText.secondaryText,
          tabBarInactiveTintColor: theme.tabInactive.dark,
        }}
      >
        <Tab.Screen
          name={navRoutes.tabRoutes.comunity}
          component={InConstruction}
          options={{
            tabBarIcon: ({ focused }) => renderTabIcon(focused, TabComunity),
          }}
        />
        <Tab.Screen
          name={navRoutes.tabRoutes.menssages}
          component={InConstruction}
          options={{
            tabBarIcon: ({ focused }) => renderTabIcon(focused, TabMenssage),
          }}
        />
        <Tab.Screen
          name={navRoutes.tabRoutes.learn}
          component={LearningNavigation}
          options={{
            tabBarIcon: ({ focused }) => renderTabIcon(focused, TabLearning),
          }}
        />
        <Tab.Screen
          name={navRoutes.tabRoutes.user}
          component={ProfileNavigation}
          options={{
            tabBarIcon: ({ focused }) => renderTabIcon(focused, TabProfile),
          }}
        />
      </Tab.Navigator>
    </View>
  )
}
