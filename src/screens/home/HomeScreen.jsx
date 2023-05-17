import { SvgUri } from 'react-native-svg'
import { View } from 'react-native'
import styles from './homeStyle'
import { StyledButton, StyledText } from '../../components'

function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.titleAndLogo}>
        <SvgUri uri='https://res.cloudinary.com/di1g1ylxi/image/upload/v1684247999/TechTalk/Logo_a9fmsp.svg' />
        <View style={styles.title}>
          <StyledText bold fontSize='title'>
            ¡Bienvenido a{' '}
          </StyledText>
          <StyledText bold fontSize='title' color='third'>
            TechTalk!
          </StyledText>
        </View>
      </View>
      <View style={styles.robot}>
        <SvgUri uri='https://res.cloudinary.com/di1g1ylxi/image/upload/v1684266582/TechTalk/HiRobot_ecneaw.svg' />
      </View>
      <View style={styles.navigation}>
        <StyledButton>Iniciar Sesión</StyledButton>
        <StyledText fontSize restStyledProps={styles.navRegister}>
          ¿No eres usuario? Registrate
        </StyledText>
      </View>
    </View>
  )
}
export default HomeScreen
