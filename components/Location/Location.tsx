import React, { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet } from "react-native";

import { getCodeCity, getWeatherOnTvelweHour } from "../../api/getWeather";

import { ICoordination, IWeather } from "../../interfaces";
import WeatherItem from "../WeatherItem";
import { useLocation } from "./hooks/Location";
import * as Location from "expo-location";



export default function App() {
	const {location, errorMsg} = useLocation()
	const [codeCity, setCodeCity] = useState<string>("");
	const [weather, setWeather] = useState<IWeather[]>([]);

	useEffect(() => {
		(async () => {
			console.log(location);
			if(!location){return}
			let coordination: ICoordination = location.coords;
			let code = await getCodeCity(coordination);
			// console.log("1358235", code?.data?.Key);
			// let value = code?.data?.Key;
			// console.log(value);

			// setCodeCity(value);
			// console.log(codeCity);

			// const weaher1 = await getWeatherOnTvelweHour(codeCity);
			// // console.log(weaher?.data);
			// console.log(weaher1?.data);
			// setWeather(weaher1?.data);
		})();
	}, [location]);
	// useEffect(()=>{
	//   (async () => {
	//   const weaher1 = await getWeatherOnTvelweHour(codeCity)
	//   // console.log(weaher?.data);
	//   console.log(weaher1?.data[0]);
	//   setWeather(weaher1?.data)
	// })();
	// },[codeCity])

	let text = "Waiting..";
	if (errorMsg) {
		text = errorMsg;
	} else if (location) {
		text = JSON.stringify(location);
	}

	return (
		<View style={styles.container}>
			{/*			{weather?.map((item: IWeather, index: number) => {
				console.log(item.DateTime);
				return <WeatherItem key={index} weatherItem={[item, index]} />;
			})} */}

			<Text style={styles.paragraph}>kdfdf</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		// gap:10
	},
	paragraph: {
		fontSize: 20,
	},
});
