import { View } from 'react-native'
import { RobotPlaying } from '../../components/svgComponents'
import { StyledText } from '../../components/styledComponents'
import styles from './stylesConstruction'

export default function InConstruction() {
  return (
    <View style={styles.container}>
      <View style={styles.robot}>
        <RobotPlaying />
      </View>
      <StyledText color='third' fontSize='title'>
        Pagina en construcción
      </StyledText>
    </View>
  )
}
