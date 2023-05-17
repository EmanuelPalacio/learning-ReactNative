import { ScrollView, View } from 'react-native'
import styles from './loginStyle'
import {
  StyledButton,
  StyledInput,
  StyledText,
} from '../../components/styledComponents'
import { Email, Key, Eye, HiRobot } from '../../components/svgComponents'

export default function LoginSCreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.robot}>
        <HiRobot />
      </View>
      <StyledText bold color='third' fontSize='title' titleFont>
        ¡Bienvenido!
      </StyledText>
      <StyledText fontSize='subTitle'>
        Ingresa tus datos para continuar
      </StyledText>
      <View style={styles.form}>
        <StyledInput icon={<Email />} placeholder='Ingrese su nombre' />
        <StyledInput
          icon={<Key />}
          placeholder='Ingrese su contraseña'
          password
          secondIcon={<Eye />}
        />
        <StyledButton>Iniciar Sesión</StyledButton>
      </View>
    </ScrollView>
  )
}
