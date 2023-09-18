import React, { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet } from "react-native";

import { getCodeCity, getWeatherOnTwelveHour } from "../../api/getWeather";

import { ICoordination, IDataCity, IWeather } from "../../interfaces";
import WeatherItem from "../WeatherOnTwelveHour/WeatherItem";
import { useLocation } from "../hooks/Location";

export default function Location(dataCity:IDataCity) {
	// const { dataCity, errorMsg } = useLocation();

	let text = "Waiting..";
      console.log(dataCity);

	if (dataCity) {
		text = dataCity?.LocalizedName;
	}
	// 	text = dataCity?.LocalizedName;
	// }

	return (
		<View style={styles.container}>
			<Text style={styles.paragraph}>{text}</Text>
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
