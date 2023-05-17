import { StyleSheet } from 'react-native'
import theme from '../../../theme/theme'

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: theme.fontFamily.title,
    fontSize: theme.fontSizes.subTitle,
    color: theme.colorText.secondaryText,
  },
  second: {
    color: theme.colorText.primaryText,
  },
  alternativeSize: {
    fontSize: theme.fontSizes.text,
  },
  bold: {
    fontFamily: theme.fontFamily.titleBold,
  },
  defaultBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 350,
    backgroundColor: theme.color.secondary,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 50,
  },
})
export default styles
