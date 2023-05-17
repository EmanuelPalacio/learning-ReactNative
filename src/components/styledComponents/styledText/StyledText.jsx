import { Text } from 'react-native'
import styles from './styleText'

export default function StyledText({
  children,
  bold,
  fontSize,
  color,
  restStyledProps,
}) {
  const settings = [
    styles.default,
    fontSize === 'title' && styles.title,
    fontSize === 'subTitle' && styles.subTitle,
    bold && !fontSize && styles.boldText,
    bold && fontSize && styles.boldTitle,
    color === 'second' && styles.second,
    color === 'third' && styles.third,
    restStyledProps,
  ]

  return <Text style={settings}>{children}</Text>
}
