import React, { useState, useEffect } from "react";
import {View, StyleSheet } from "react-native";

import { getWeatherOnTwelveHour } from "../../api/getWeather";

import { IWeatherOnHour } from "../../interfaces";
import WeatherItem from "./WeatherItem";
import { baseWeatherDataOnTwelveHours } from "../../config/dataForNoFetch";
import { useAppSelector } from "../../store/hook";


export default function WeatherOnTwelveHour() {

	const [weather, setWeather] = useState<IWeatherOnHour[]>(baseWeatherDataOnTwelveHours);
	const codeCity = useAppSelector(state=>state.city.Key)
	// useEffect(() => {
	// 	(async () => {
	// 		const weather = await getWeatherOnTwelveHour(codeCity);
    //         console.log(weather);
	// 		if(!weather)return
	// 		setWeather(weather);
	// 	})();
	// }, [codeCity]);

	return (
		<View style={styles.container}>
				{weather?.map((item: IWeatherOnHour, index: number) => {
					return <WeatherItem key={index} weatherItem={item} />;
				})}

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: "flex",
		flexDirection: "row",
		
	},
	paragraph: {
		fontSize: 15,
	},
});
