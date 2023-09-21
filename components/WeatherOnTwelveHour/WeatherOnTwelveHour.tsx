import React, { useState, useEffect } from "react";
import {View, StyleSheet, ScrollView } from "react-native";

import { getWeatherOnTwelveHour } from "../../api/getWeather";

import { IWeather } from "../../interfaces";
import WeatherItem from "./WeatherItem";
import { baseWeatherDataOnTvelweHours } from "../../dataForNoFetch";
import AdditionWeatherInfoNow from "../AdditionWeatherInfoNow";

interface IProps{
	codeCity:string
}

export default function WeatherOnTwelveHour({codeCity}: IProps) {
      console.log(codeCity);

	const [weather, setWeather] = useState<IWeather[]>(baseWeatherDataOnTvelweHours);

	useEffect(() => {
		(async () => {
			const weather = await getWeatherOnTwelveHour(codeCity);
            console.log(weather);
			if(!weather)return
			setWeather(weather);
		})();
	}, []);

	return (
		<View style={styles.container}>
			<ScrollView horizontal={true}>
				<AdditionWeatherInfoNow additionInfo={}/>
				{weather?.map((item: IWeather, index: number) => {
					return <WeatherItem key={index} weatherItem={item} />;
				})}
			</ScrollView>

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: "flex",
		// justifyContent: "center",
		// alignItems: "center",
		flexDirection: "row",
		
	},
	paragraph: {
		fontSize: 15,
	},
});
