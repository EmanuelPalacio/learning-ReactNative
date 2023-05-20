import { NavigationContainer } from '@react-navigation/native'
import AuthNavigation from './AuthNavigation'

function RootNavegation() {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  )
}

export default RootNavegation
