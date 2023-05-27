import { StyleSheet, Dimensions } from 'react-native'
import theme from '../../theme/theme'

const windowWidth = Dimensions.get('window').width / 2 - 130 / 2
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'relative',
    height: '30%',
  },
  background: {
    flex: 1,
    height: '70%',
  },
  profileImage: {
    position: 'absolute',
    aspectRatio: 1,
    width: 130,
    borderRadius: 130 / 2,
    right: windowWidth,
    top: '30%',
  },
  level: {
    position: 'absolute',
    backgroundColor: theme.color.secondary,
    padding: 10,
    borderRadius: 10,
    bottom: 0,
    right: 10,
  },
})

export default styles
