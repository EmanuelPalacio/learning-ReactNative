import { SvgUri } from 'react-native-svg'
import { ScrollView, View } from 'react-native'
import styles from './loginStyle'
import { StyledButton, StyledInput, StyledText } from '../../components'

export default function LoginSCreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SvgUri
        height='150'
        uri='https://res.cloudinary.com/di1g1ylxi/image/upload/v1684266582/TechTalk/HiRobot_ecneaw.svg'
      />
      <StyledText bold color='third' fontSize='title' titleFont>
        ¡Bienvenido!
      </StyledText>
      <StyledText fontSize='subTitle'>
        Ingresa tus datos para continuar
      </StyledText>
      <View style={styles.form}>
        <StyledInput
          icon='https://res.cloudinary.com/di1g1ylxi/image/upload/v1684252707/TechTalk/icons/email_fte9b4.svg'
          placeholder='Ingrese su nombre'
        />
        <StyledInput
          icon='https://res.cloudinary.com/di1g1ylxi/image/upload/v1684252707/TechTalk/icons/key_kigvvc.svg'
          secondIcon='https://res.cloudinary.com/di1g1ylxi/image/upload/v1684253762/TechTalk/icons/eye_losltk.svg'
          placeholder='Ingrese su contraseña'
        />
        <StyledButton>Iniciar Sesión</StyledButton>
      </View>
    </ScrollView>
  )
}
