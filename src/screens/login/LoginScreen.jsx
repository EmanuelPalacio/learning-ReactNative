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
import jsonLogin from '../../utils/login.json'
import jsonUser from '../../utils/users.json'

export default function LoginSCreen() {
  const dataLogin = JSON.parse(JSON.stringify(jsonLogin))
  const dataUser = JSON.parse(JSON.stringify(jsonUser))
  const { navigate } = useNavigation()
  const dispatch = useDispatch()
  const [data, setData /* reset */] = useDataCollection({
    email: '',
    password: '',
  })
  const simulacion = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const checking = dataLogin.some(
          (elem) => elem.email === data.email && elem.password === data.password
        )

        if (checking) {
          const info = dataUser.find((e) => e.email === data.email)
          console.log(
            '🚀 ~ file: LoginScreen.jsx:37 ~ setTimeout ~ info:',
            info
          )
          resolve(info) // Resolver la promesa con los datos comprados
        } else {
          const error = 'Error en los datos' // Supongamos que hay un error en los datos
          reject(error, checking) // Rechazar la promesa con el error
        }
      }, 1000)
    })
  const login = async () => {
    dispatch(check({ status: authStatus.checking }))

    try {
      const userData = await simulacion()
      if (userData) {
        dispatch(
          logIn({
            status: authStatus.authorized,
            user: {
              ...userData,
            },
          })
        )
      }
    } catch (error) {
      console.log('🚀 ~ file: LoginScreen.jsx:57 ~ login ~ error:', error)
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
