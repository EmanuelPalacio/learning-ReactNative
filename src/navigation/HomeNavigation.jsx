import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/home/HomeScreen'
import navRoutes from '../models/navigationRoutes'

function HomeNavigation() {
  const Home = createStackNavigator()

  return (
    <Home.Navigator
      initialRouteName={navRoutes.homeRoutes.home}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Home.Screen name={navRoutes.homeRoutes.home} component={HomeScreen} />
    </Home.Navigator>
  )
}
export default HomeNavigation
