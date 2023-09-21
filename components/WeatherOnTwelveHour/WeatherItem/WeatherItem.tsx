import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { IWeather } from "../../../interfaces";
import moment from "moment";
import { MaterialCommunityIcons } from "@expo/vector-icons";
interface IProps{
	weatherItem:IWeather
}

export default function WeatherItem({ weatherItem }:IProps ) {
	const {
			DateTime,
			WeatherIcon,
			IconPhrase,
			Temperature,
	} = weatherItem;
	console.log(weatherItem);
	console.log(
		DateTime,
		WeatherIcon,
		IconPhrase,
		Temperature
	);
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{moment(DateTime).hours()}:00</Text>
			{/* <Image
				source={require(`../../../assets/img/icons/${WeatherIcon}.svg`)}
				style={{ width: 40, height: 40 }}
			/> */}
			<MaterialCommunityIcons name="weather-cloudy" size={32}></MaterialCommunityIcons>
			<Text style={styles.text}>{Math.round(Temperature.Value)}°</Text>
			
			{/* <StatusBar style="auto" /> */}
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
		fontSize: 15,
		padding: 10,
	},
});
