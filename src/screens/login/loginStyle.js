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
  robot: {
    aspectRatio: 289 / 310, // Proporción original de la SVG, al declarar esta propiedad puedo modificar solo altura o ancho y que se ajuste automaticamente. La svg no tiene que tener alto y ancho declarados.
    height: '20%',
  },
  form: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 15,
    gap: 10,
  },
})
export default styles
