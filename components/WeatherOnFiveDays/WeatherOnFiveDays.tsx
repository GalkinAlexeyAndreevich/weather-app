import React, { useState, useEffect } from "react";
import {View, StyleSheet } from "react-native";

import { getWeatherOnFiveDays } from "../../api/getWeather";

import { IDailyForecasts } from "../../interfaces";
import WeatherItem from "./WeatherItem";
// import WeatherItem from "./WeatherItem";

interface IProps{
	codeCity:string
}

export default function WeatherOnFiveDays({codeCity}: IProps) {
      console.log(codeCity);

	const [weather, setWeather] = useState<IDailyForecasts[]>([]);

	useEffect(() => {
		(async () => {
			const weather = await getWeatherOnFiveDays(codeCity);
            console.log(weather);
			if(!weather)return
			setWeather(weather);
		})();
	}, []);

	return (
		<View style={styles.container}>
			{weather?.map((item: IDailyForecasts, index: number) => {
				console.log(item.Date);
				return <WeatherItem key={index} weatherItem={item} />;
			})}
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
	},
	paragraph: {
		fontSize: 20,
	},
});
