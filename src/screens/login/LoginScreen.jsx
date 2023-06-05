import { ScrollView, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import styles from './loginStyle'
import {
  StyledButton,
  StyledInput,
  StyledText,
  StyledLink,
} from '../../components/styledComponents'
import { Email, Key, Eye, HiRobot } from '../../components/svgComponents'
import navRoutes from '../../models/navigationRoutes'
import useDataCollection from '../../hooks/useDataCollection'
import { check, logIn } from '../../store/reducers/userReducer'
import authStatus from '../../models/authStatus'
import { authService } from '../../services/Firebase'

export default function LoginSCreen() {
  const { navigate } = useNavigation()
  const dispatch = useDispatch()
  const [data, setData /* reset */] = useDataCollection({
    email: '',
    password: '',
  })
  const login = async () => {
    dispatch(check({ status: authStatus.checking }))
    try {
      const user = await authService({ ...data })
      dispatch(logIn(user))
    } catch (error) {
      dispatch(check({ status: authStatus.unauthorized }))
    }
  }

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
        <StyledButton onPress={login}>Iniciar Sesión</StyledButton>
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
