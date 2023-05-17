import { SvgUri } from 'react-native-svg'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './homeStyle'
import { StyledButton, StyledText } from '../../components'
import navRoutes from '../../models/navigationRoutes'

function HomeScreen() {
  const { navigate } = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.titleAndLogo}>
        <SvgUri uri='https://res.cloudinary.com/di1g1ylxi/image/upload/v1684247999/TechTalk/Logo_a9fmsp.svg' />
        <View style={styles.title}>
          <StyledText bold fontSize='title' titleFont>
            ¡Bienvenido a{' '}
          </StyledText>
          <StyledText bold fontSize='title' color='third' titleFont>
            TechTalk!
          </StyledText>
        </View>
      </View>
      <View style={styles.robot}>
        <SvgUri uri='https://res.cloudinary.com/di1g1ylxi/image/upload/v1684266582/TechTalk/HiRobot_ecneaw.svg' />
      </View>
      <View style={styles.navigation}>
        <StyledButton onPress={() => navigate(navRoutes.homeRoutes.login)}>
          Iniciar Sesión
        </StyledButton>
        <StyledButton
          second
          reversedBorder
          onPress={() => navigate(navRoutes.homeRoutes.register)}
        >
          Regístrate
        </StyledButton>
      </View>
    </View>
  )
}
export default HomeScreen
