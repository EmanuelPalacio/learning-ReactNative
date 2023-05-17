import { StyleSheet } from 'react-native'
import theme from '../../theme/theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: '100%',
    alignItems: 'center',
    gap: 10,
    paddingTop: 10,
    backgroundColor: theme.color.primary,
  },
  form: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 15,
    gap: 10,
  },
})
export default styles
