import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  Email,
  Key,
  Person,
  Phone,
  RegisterRobot,
} from '../../components/svgComponents'
import {
  StyledButton,
  StyledInput,
  StyledText,
} from '../../components/styledComponents'
import styles from './styleRegister'
import navRoutes from '../../models/navigationRoutes'
import StyledLink from '../../components/styledComponents/styledLink/styledLink'

export default function RegisterScreen() {
  const { navigate } = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.RegisterRobot}>
          <RegisterRobot />
        </View>
        <StyledText bold color='third' titleFont fontSize='title'>
          ¡Registrate!
        </StyledText>
        <StyledText fontSize='subTitle'>
          Ingresa tus datos para comenzar
        </StyledText>
      </View>
      <View style={styles.form}>
        <StyledInput icon={<Person />} placeholder='Ingrese su nombre' />
        <StyledInput icon={<Email />} placeholder='Ingrese su nombre' />
        <StyledInput icon={<Phone />} placeholder='Ingrese su nombre' />
        <StyledInput icon={<Key />} placeholder='Ingrese su nombre' />
        <StyledButton>Registrarse</StyledButton>
        <View style={styles.login}>
          <StyledText fontSize='small'>¿Ya eres miembro? </StyledText>
          <StyledLink link={() => navigate(navRoutes.homeRoutes.register)}>
            Inicia sesión
          </StyledLink>
        </View>
      </View>
    </View>
  )
}
