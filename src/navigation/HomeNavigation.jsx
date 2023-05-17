import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/home/HomeScreen.jsx'

function HomeNavigation() {
  const Home = createStackNavigator()

  return (
    <Home.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Home.Screen name='Home' component={HomeScreen} />
    </Home.Navigator>
  )
}
export default HomeNavigation
