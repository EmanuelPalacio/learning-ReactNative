import { ScrollView, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './loginStyle'
import {
  StyledButton,
  StyledInput,
  StyledText,
} from '../../components/styledComponents'
import { Email, Key, Eye, HiRobot } from '../../components/svgComponents'
import StyledLink from '../../components/styledComponents/styledLink/styledLink'
import navRoutes from '../../models/navigationRoutes'

export default function LoginSCreen() {
  const { navigate } = useNavigation()
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.robot}>
          <HiRobot />
        </View>
        <StyledText bold color='third' fontSize='title' titleFont>
          ¡Bienvenido!
        </StyledText>
        <StyledText fontSize='subTitle'>
          Ingresa tus datos para continuar
        </StyledText>
      </View>
      <View style={styles.form}>
        <StyledInput icon={<Email />} placeholder='Ingrese su nombre' />
        <StyledInput
          icon={<Key />}
          placeholder='Ingrese su contraseña'
          password
          secondIcon={<Eye />}
        />
        <StyledLink styleProps={styles.forgotPass}>
          ¿Olvidaste tu contraseña?
        </StyledLink>
        <StyledButton>Iniciar Sesión</StyledButton>
        <View style={styles.register}>
          <StyledText fontSize='small'>¿No eres miembro? </StyledText>
          <StyledLink link={() => navigate(navRoutes.homeRoutes.register)}>
            Regístrate
          </StyledLink>
        </View>
      </View>
    </ScrollView>
  )
}
