import { Modal, View } from 'react-native'
import styles from './styleLoginAlert'
import { StyledText } from '../../styledComponents'
import { RobotError } from '../../svgComponents'

export default function LoginAlert({ error }) {
  return (
    <Modal animationType='slide'>
      <View style={styles.container}>
        <RobotError />
        <StyledText fontSize='title'>{error}</StyledText>
      </View>
    </Modal>
  )
}
