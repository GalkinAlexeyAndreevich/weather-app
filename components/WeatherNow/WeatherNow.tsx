import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import { IWeatherNow } from "../../interfaces";


interface IProps {
  weatherNow: IWeatherNow;
}

export default function WeatherNow({ weatherNow }: IProps) {


  if (!weatherNow.WeatherIcon) return;
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.paragraph}>
          {Math.round(weatherNow.Temperature.Metric.Value)}°
        </Text>
        <Image
		source={{uri:`https://developer.accuweather.com/sites/default/files/${Number(weatherNow.WeatherIcon)<10?'0'+weatherNow.WeatherIcon:weatherNow.WeatherIcon}-s.png`}}			  
		style={{ width: 40, height: 40 }}
        />
      </View>

      <Text style={styles.weatherText}>{weatherNow.WeatherText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    flexDirection: "column",
  },
  paragraph: {
    fontSize: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  weatherText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});
