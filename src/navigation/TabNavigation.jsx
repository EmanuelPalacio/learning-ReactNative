import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View } from 'react-native'
import navRoutes from '../models/navigationRoutes'
import { InConstruction } from '../screens'
import theme from '../theme/theme'

export default function TabNavigation() {
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
          tabBarStyle: {
            height: 50,
            borderTopEndRadius: 50,
            borderTopStartRadius: 50,
            backgroundColor: theme.color.secondary,
          },

          tabBarActiveTintColor: theme.colorText.secondaryText,
          tabBarInactiveTintColor: theme.colorText.primaryText,
        }}
      >
        <Tab.Screen
          name={navRoutes.tabRoutes.comunity}
          component={InConstruction}
        />
        <Tab.Screen
          name={navRoutes.tabRoutes.menssages}
          component={InConstruction}
        />
        <Tab.Screen
          name={navRoutes.tabRoutes.learn}
          component={InConstruction}
        />
        <Tab.Screen
          name={navRoutes.tabRoutes.user}
          component={InConstruction}
        />
      </Tab.Navigator>
    </View>
  )
}
