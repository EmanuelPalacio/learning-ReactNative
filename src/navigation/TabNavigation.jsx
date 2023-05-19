import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

export default function TabNavigation() {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator>
      <Tab.Screen />
    </Tab.Navigator>
  )
}