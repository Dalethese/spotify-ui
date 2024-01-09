import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GetStarted from './src/pages/GetStarted';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent />
      <GetStarted />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
