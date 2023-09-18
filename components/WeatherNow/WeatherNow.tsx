import React, { useState, useEffect } from "react";
import {View, StyleSheet, Image, Text } from "react-native";

import { getWeatherNow, getWeatherOnTwelveHour } from "../../api/getWeather";

import { IWeatherNow } from "../../interfaces";

interface IProps{
	codeCity:string
}

export default function WeatherNow({codeCity}: IProps) {
      console.log(codeCity);

	const [weather, setWeather] = useState<IWeatherNow>();

	useEffect(() => {
		(async () => {
			const weather = await getWeatherNow(codeCity);
            console.log(weather);
			if(!weather)return
			setWeather(weather);
		})();
	}, []);
	return (
		<View style={styles.container}>
			<Image
				source={require(`../../assets/img/icons/${weather?.WeatherIcon}.svg`)}
				style={{ width: 40, height: 40 }}
			/>
			{/* <Text style={styles.paragraph}>{Math.round(weather?Temperature.Metric.Value)}°</Text> */}
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
