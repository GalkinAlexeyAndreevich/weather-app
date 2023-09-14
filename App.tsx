import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Location from './components/Location';
import Loading from './components/Loading';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>jkdfglsdga</Text>
      <Location />
      {/* <Loading /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
