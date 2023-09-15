import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Location from './components/Location';
import Loading from './components/Loading';

export default function App() {
  return (
    <View style={styles.container}>
      <Location />
      {/* <Loading /> */}
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "green",
		alignItems: "center",
		justifyContent: "center",
	},
});
