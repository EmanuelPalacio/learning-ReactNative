/* eslint-disable react/style-prop-object */
import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import RootNavegation from './navigation/RootNavigation.jsx'

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
      <StatusBar hidden={false} style='auto' />
      <Provider store={store}>
        <RootNavegation />
      </Provider>
    </SafeAreaView>
  )
}
