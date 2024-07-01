import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import HomeScreen from "./src/pages/HomeScreen"


export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen/>
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
