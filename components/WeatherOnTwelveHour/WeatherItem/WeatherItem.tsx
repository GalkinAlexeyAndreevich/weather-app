import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { IWeather } from "../../../interfaces";
import moment from "moment";

export default function WeatherItem({ weatherItem }: IWeather & number) {
	const {
		0: {
			DateTime,
			WeatherIcon,
			IconPhrase,
			HasPrecipitation,
			IsDaylight,
			Temperature,
		},
	} = weatherItem;
	console.log(weatherItem);
	console.log(
		DateTime,
		WeatherIcon,
		IconPhrase,
		HasPrecipitation,
		IsDaylight,
		Temperature
	);
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{moment(DateTime).hours()}:00</Text>
			<Image
				source={require(`../../../assets/img/icons/${WeatherIcon}.svg`)}
				style={{ width: 40, height: 40 }}
			/>
			<Text style={styles.text}>{Math.round(Temperature.Value)}°</Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontSize: 30,
		padding: 10,
	},
});
