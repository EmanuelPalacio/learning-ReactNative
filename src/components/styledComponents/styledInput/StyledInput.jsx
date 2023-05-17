import { TextInput, TouchableOpacity, View } from 'react-native'
import { SvgUri } from 'react-native-svg'
import { useState } from 'react'
import styles from './styleInput'
import theme from '../../../theme/theme'

export default function StyledFunction({ icon, secondIcon, placeholder }) {
  const [focus, setFocus] = useState(false)
  return (
    <View style={[styles.container, focus ? styles.containerFocus : null]}>
      <View style={styles.icon}>
        <SvgUri height='100%' uri={icon} />
      </View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={theme.colorText.primaryText}
        onFocus={() => setFocus(!focus)}
        onBlur={() => setFocus(!focus)}
      />
      {secondIcon ? (
        <TouchableOpacity style={styles.secondIcon}>
          <SvgUri height='100%' uri={secondIcon} />
        </TouchableOpacity>
      ) : null}
    </View>
  )
}
