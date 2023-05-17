import { TouchableOpacity, Text } from 'react-native'
import styles from './styleButton'

export default function StyledButton({
  children,
  alternativeSize,
  second,
  bold,
}) {
  const textConfig = [
    styles.defaultText,
    alternativeSize && styles.alternativeSize,
    second && styles.second,
    bold && styles.bold,
  ]
  const btnConfig = [styles.defaultBtn]
  return (
    <TouchableOpacity style={btnConfig}>
      <Text style={textConfig}>{children}</Text>
    </TouchableOpacity>
  )
}
