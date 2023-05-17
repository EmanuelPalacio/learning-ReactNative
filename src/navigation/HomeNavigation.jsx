import { createStackNavigator } from '@react-navigation/stack'
import navRoutes from '../models/navigationRoutes'
import { HomeScreen, LoginScreen, RegisterScreen } from '../screens'

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
      <Home.Screen name={navRoutes.homeRoutes.login} component={LoginScreen} />
      <Home.Screen
        name={navRoutes.homeRoutes.register}
        component={RegisterScreen}
      />
    </Home.Navigator>
  )
}
export default HomeNavigation
