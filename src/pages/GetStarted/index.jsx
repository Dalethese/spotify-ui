import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import BgImage from '../../assets/getStarted-bg.png';
import logo from '../../assets/logo.png';
import { Button } from '../../components/Button';

export default function GetStarted() {
  return (
    <View style={styles.container}>
      <ImageBackground source={BgImage} resizeMode="cover" style={styles.bgImage}>
        <Image source={logo} style={{ alignSelf: 'center' }} />

        <View style={styles.content}>
          <Text style={styles.title}>Enjoy listening to music</Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis enim purus
            sed phasellus. Cursus ornare id scelerisque aliquam.
          </Text>
          <Button />
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    paddingTop: 37,
  },
  content: {
    position: 'absolute',
    bottom: 20,
    paddingHorizontal: 37,
    alignSelf: 'center',
  },
  title: {
    color: '#dadada',
    fontSize: 25,
    textAlign: 'center',
  },
  text: {
    marginTop: 21,
    marginBottom: 37,
    color: '#797979',
    fontSize: 17,
    textAlign: 'center',
  },
});
