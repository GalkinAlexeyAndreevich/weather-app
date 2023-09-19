import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Location from "./components/Location";
import Loading from "./components/Loading";
import WeatherPage from "./Pages/WeatherPage";
import { useLocation } from "./hooks/Location";

export default function App() {
	const { cityData, errorMsg } = useLocation();
	console.log(cityData);

	if (errorMsg) {
		return (
			<View style={styles.container}>
				<Text>{errorMsg}</Text>
			</View>
		);
	} else if (cityData) {
		return (
			<View style={styles.container}>
				<Location nameCity={cityData.LocalizedName} />
				<WeatherPage cityCode={cityData.Key} />
			</View>
		);
	} else {
		return (
			<View style={styles.container}>
				<Loading />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: "green",
		alignItems: "center",
		justifyContent: "center",
		// flexDirection: "row",
	},
});
