import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { IDailyForecasts, IWeather } from "../../../interfaces";
import { convertDate } from "../../../utils/dateConverter";
import { MaterialCommunityIcons } from "@expo/vector-icons";
interface IProps {
	weatherItem: IDailyForecasts
}

export default function WeatherItem({ weatherItem }: IProps) {
	const {
		Date,
		Temperature,
		Day,
		Night
	} = weatherItem;
	{ convertDate(Date) }
	let finalDate = `${convertDate(Date).month} ${convertDate(Date).day}`;
	console.log(weatherItem);
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.text}>{finalDate}</Text>
				<Text style={styles.text}>{convertDate(Date).calendarDay}</Text>
			</View>
			<MaterialCommunityIcons style={{paddingRight:10}} name="weather-cloudy" size={32}></MaterialCommunityIcons>
			<View >
				<Text style={styles.text}>max</Text>
				<Text style={styles.text}>
					{Math.round(Temperature.Maximum.Value)}°
				</Text>
			</View>
			<View>
				<Text style={styles.text}>min </Text>
				<Text style={styles.text}>{Math.round(Temperature.Minimum.Value)}°</Text>
			</View>

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
		flexDirection: "row",
		marginTop: 10
	},
	text: {
		fontSize: 15,
		paddingRight: 10,
	},
	column: {
		flexDirection: "column"
	}
});
