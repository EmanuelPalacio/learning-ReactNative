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
import useDataCollection from '../../hooks/useDataCollection'

export default function LoginSCreen() {
  const { navigate } = useNavigation()
  const [data, setData /* reset */] = useDataCollection({
    email: '',
    password: '',
  })
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
        <StyledInput
          icon={<Email />}
          placeholder='Ingrese su email'
          name='email'
          onChange={setData}
        />
        <StyledInput
          icon={<Key />}
          placeholder='Ingrese su contraseña'
          password
          secondIcon={<Eye />}
          name='password'
          onChange={setData}
        />
        <StyledLink styleProps={styles.forgotPass}>
          ¿Olvidaste tu contraseña?
        </StyledLink>
        <StyledButton onPress={() => console.log(data)}>
          Iniciar Sesión
        </StyledButton>
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
