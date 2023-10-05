import React, { useState, useEffect } from "react";
import {View, StyleSheet } from "react-native";

import { getWeatherOnFiveDays } from "../../api/getWeather";

import { IDailyForecasts } from "../../interfaces";
import WeatherItem from "./WeatherItem";
import {baseWeatherDataOnFiveDays} from "../../config/dataForNoFetch"
import { useAppSelector } from "../../store/hook";

export default function WeatherOnFiveDays() {

	const [weather, setWeather] = useState<IDailyForecasts[]>(baseWeatherDataOnFiveDays);
	const codeCity = useAppSelector(state=>state.city.Key)
	// useEffect(() => {
	// 	(async () => {
	// 		const weather = await getWeatherOnFiveDays(codeCity);
    //         console.log(weather);
	// 		if(!weather)return
	// 		setWeather(weather);
	// 	})();
	// }, [codeCity]);

	return (
		<View style={styles.container}>
			{weather?.map((item: IDailyForecasts, index: number) => {
				return <WeatherItem key={index} weatherItem={item} />;
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// flex: 3,
		// display: "flex",
		// justifyContent: "center",
		// alignItems: "center",
	},
	paragraph: {
		fontSize: 5,
	},
});
