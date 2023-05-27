import { ImageBackground, View, Image } from 'react-native'
import styles from './profileStyle'
import { StyledText } from '../../components/styledComponents'

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          style={styles.background}
          source={{
            uri: 'https://res.cloudinary.com/dshfifpgv/image/upload/v1681088243/Images%20proyect%20techTalk/TechTalkAssets/Defaut%20avatar%20profile/backgroundDefault_xqafes.png',
          }}
        />
        <Image
          style={styles.profileImage}
          source={{
            uri: 'https://res.cloudinary.com/dshfifpgv/image/upload/v1681086310/Images%20proyect%20techTalk/TechTalkAssets/Defaut%20avatar%20profile/Avatar_bczsp0.jpg',
          }}
        />
        <View style={styles.level}>
          <StyledText color='second'>Principiante A2</StyledText>
        </View>
      </View>
    </View>
  )
}
