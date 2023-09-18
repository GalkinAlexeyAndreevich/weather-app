import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { IDailyForecasts, IWeather } from "../../../interfaces";
import moment from "moment";
interface IProps{
	weatherItem:IDailyForecasts
}

export default function WeatherItem({ weatherItem }:IProps ) {
	const {
		Date,
		Temperature
	} = weatherItem;
	console.log(weatherItem);
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{moment(Date).date()}</Text>
			<Text style={styles.text}>Максимум: {Math.round(Temperature.Maximum.Value)}°</Text>
			<Text style={styles.text}>Минимум: {Math.round(Temperature.Minimum.Value)}°</Text>
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
