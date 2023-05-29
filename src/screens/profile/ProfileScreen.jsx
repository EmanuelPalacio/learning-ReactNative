import { ImageBackground, View, Image } from 'react-native'
import styles from './profileStyle'
import { StyledText } from '../../components/styledComponents'
import {
  Listening,
  Reading,
  Speaking,
  Writing,
} from '../../components/svgComponents'

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
      <View style={styles.infoUser}>
        <StyledText color='third' fontSize='title' bold fontTitle>
          Emanuel Palacio
        </StyledText>
        <StyledText bold>Desarrollador Web</StyledText>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Listening />
          <StyledText color='second' fontSize='subTitle'>
            Listening
          </StyledText>
          <StyledText color='second' fontSize='subTitle'>
            B1
          </StyledText>
        </View>
        <View style={styles.card}>
          <Reading />
          <StyledText color='second' fontSize='subTitle'>
            Reading
          </StyledText>
          <StyledText color='second' fontSize='subTitle'>
            B1
          </StyledText>
        </View>
        <View style={styles.card}>
          <Speaking />
          <StyledText color='second' fontSize='subTitle'>
            Speaking
          </StyledText>
          <StyledText color='second' fontSize='subTitle'>
            B1
          </StyledText>
        </View>
        <View style={styles.card}>
          <Writing />
          <StyledText color='second' fontSize='subTitle'>
            Writing
          </StyledText>
          <StyledText color='second' fontSize='subTitle'>
            B1
          </StyledText>
        </View>
      </View>
    </View>
  )
}
