import { SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import Location from "./components/Location";
import Loading from "./components/Loading";
import WeatherPage from "./Pages/WeatherPage";

// let cityData = {
// 	LocalizedName: "Калуга",
//       Key:"293006"
// };
// let errorMsg = ""

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
			<SafeAreaView style={styles.container}>
				<ScrollView>
					<Location nameCity={cityData.LocalizedName} />
					<WeatherPage cityCode={cityData.Key} />
				</ScrollView>

			</SafeAreaView>
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
		justifyContent: "center",
		marginTop:100
	},
});
