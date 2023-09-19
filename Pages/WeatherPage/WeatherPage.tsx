import { StyleSheet, View } from "react-native";
import WeatherOnTwelveHour from "../../components/WeatherOnTwelveHour";
import WeatherOnFiveDays from "../../components/WeatherOnFiveDays";
import WeatherNow from "../../components/WeatherNow/WeatherNow";

export interface IProps {
	cityCode: string
}

export default function WeatherPage({ cityCode }: IProps) {
	if (!cityCode) return
	console.log(cityCode);

	return (
		<View style={styles.container}>
			<WeatherNow codeCity={cityCode} />
			<WeatherOnTwelveHour codeCity={cityCode} />
			<WeatherOnFiveDays codeCity={cityCode} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: "block",
		// justifyContent: "center",
		alignItems: "center",
		// flexDirection: "column",
		marginBootom:20
	},
	paragraph: {
		fontSize: 20,
	},
});
