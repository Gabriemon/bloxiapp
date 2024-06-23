import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import HomeScreen from "./src/pages/HomeScreen"

const imgbg1 = './src/pages/images/brick.jpg'

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen/>

    <ImageBackground>
      source={require(imgbg1)}
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2D022',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    
  }

});
