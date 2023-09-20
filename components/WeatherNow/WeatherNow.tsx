import React, { useState, useEffect } from "react";
import {View, StyleSheet, Image, Text } from "react-native";

import { getWeatherNow, getWeatherOnTwelveHour } from "../../api/getWeather";

import { IWeatherNow } from "../../interfaces";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface IProps{
	codeCity:string
}

let icons = {
      1:'sun'

}


export default function WeatherNow({codeCity}: IProps) {
      let baseWeather: IWeatherNow = {
                        WeatherIcon:'1',
				Temperature: { Metric: { Value: 20 } },
                        WeatherText:'Солнечно'
			};
      console.log(codeCity);

	const [weather, setWeather] = useState<IWeatherNow>(baseWeather);
      setWeather

	// useEffect(() => {
	// 	(async () => {
	// 		const weather = await getWeatherNow(codeCity);
      //             console.log(weather);
	// 		if(!weather)return
	// 		setWeather(weather);
	// 	})();
	// }, []);
	if(!weather.WeatherIcon)return
	return (
		<View style={styles.container}>
			{/* {weather.WeatherIcon && */}
			<View style={styles.row}>
				<Text style={styles.paragraph}>
					{Math.round(weather.Temperature.Metric.Value)}°
				</Text>
				{/* <Image
					source={require(`../../assets/img/icons/${weather?.WeatherIcon}.svg`)}
					style={{ width: 40, height: 40 }}
				/> */}
				<MaterialCommunityIcons name="weather-cloudy" size={32}></MaterialCommunityIcons>
			</View>

			{/* } */}

			<Text>{weather.WeatherText}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: "flex",
		justifyContent: "center",
		marginTop:20,
		flexDirection: "column",
	},
	paragraph: {
		fontSize: 20,
	},
      row:{
            flex:1,
            flexDirection:'row',
            alignItems:"center",
            justifyContent:'center'
      }
});
