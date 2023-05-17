import { StyleSheet } from 'react-native'
import theme from '../../../theme/theme'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '100%',
    borderBottomWidth: 2,
    borderColor: theme.color.secondary,
    opacity: 0.4,
  },
  containerFocus: {
    opacity: 1,
  },

  icon: {
    width: '10%',
    height: 30,
  },
  secondIcon: {
    alignItems: 'flex-end',

    width: '10%',
    height: 30,
  },
  input: {
    width: '80%',
    paddingHorizontal: 10,
    fontSize: theme.fontSizes.text,
    color: theme.colorText.primaryText,
  },
})
export default styles
