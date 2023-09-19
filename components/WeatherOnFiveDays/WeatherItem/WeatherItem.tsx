import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { IDailyForecasts, IWeather } from "../../../interfaces";
// import moment from "moment";
import { convertDate } from "../../../utils/utils";
interface IProps{
	weatherItem:IDailyForecasts
}

export default function WeatherItem({ weatherItem }:IProps ) {
	const {
		Date,
		Temperature
	} = weatherItem;
      {convertDate(Date)}
      let finalDate = `${convertDate(Date).month} ${convertDate(Date).day}`;
	console.log(weatherItem);
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{finalDate}</Text>
			<Text style={styles.column}>
				max: {Math.round(Temperature.Maximum.Value)}°
			</Text>
			<Text style={styles.text}>
				min: {Math.round(Temperature.Minimum.Value)}°
			</Text>
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
            flexDirection:"row"
	},
	text: {
		fontSize: 30,
		padding: 10,
	},
      column:{
            flexDirection:"column"
      }
});
