import React, { useState, useEffect } from "react";
import {View, StyleSheet } from "react-native";

import { getWeatherOnTwelveHour } from "../../api/getWeather";

import { IWeather } from "../../interfaces";
import WeatherItem from "./WeatherItem";

export default function WeatherOnTwelveHour(codeCity: string) {
      console.log(codeCity);

	const [weather, setWeather] = useState<IWeather[]>([]);

	useEffect(() => {
		(async () => {
			const weather = await getWeatherOnTwelveHour(codeCity);
                  console.log(weather);

			setWeather(weather?.data);
		})();
	}, []);

	return (
		<View style={styles.container}>
			{weather?.map((item: IWeather, index: number) => {
				console.log(item.DateTime);
				return <WeatherItem key={index} weatherItem={[item, index]} />;
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
		// gap:10
	},
	paragraph: {
		fontSize: 20,
	},
});
