import { StyleSheet } from 'react-native'
import theme from '../../theme/theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: theme.color.primary,
    gap: 20,
  },
  titleAndLogo: {
    alignItems: 'center',
    gap: 20,
  },
  title: {
    flexDirection: 'row',
  },
  navigation: {
    gap: 10,
  },
  navRegister: {
    alignSelf: 'flex-end',
  },
})
export default styles
