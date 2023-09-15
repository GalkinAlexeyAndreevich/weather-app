import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { API_KEY } from '../../config';
import axios from "axios"
import { getCodeCity,  getWeatherOnTvelweHour } from '../../api/getWeather';

import * as Location from 'expo-location';
import { ICoordination,IWeather } from '../../interfaces';
import WeatherItem from '../WeatherItem';


export default function App() {
  const [location, setLocation] = useState<Location.LocationObject | undefined>();
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [codeCity, setCodeCity] = useState<string>('1')
  const [weather,setWeather] = useState<IWeather[]>([])

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Вы не разрешили узнать ваше местоположение');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      
      setLocation(location);
      const coordination:ICoordination = location.coords
      let code = await getCodeCity(coordination)
      console.log("1358235",code?.data?.Key);
      let value = code?.data?.Key
      console.log(value);
      
      setCodeCity(value)
      console.log(codeCity);
      
      const weaher1 = await getWeatherOnTvelweHour(codeCity)
      // console.log(weaher?.data);
      console.log(weaher1?.data);
      setWeather(weaher1?.data)

      

    })();
  }, [codeCity]);
  // useEffect(()=>{
  //   (async () => {
  //   const weaher1 = await getWeatherOnTvelweHour(codeCity)
  //   // console.log(weaher?.data);
  //   console.log(weaher1?.data[0]);
  //   setWeather(weaher1?.data)
  // })();
  // },[codeCity])

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      {weather?.map((item:IWeather, index:number)=>{
        console.log(item.DateTime)
        return <WeatherItem key={index} weatherItem={item}/>
      })}
      {/* <Text style={styles.paragraph}>kdfdf</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:"center"
    },
    paragraph:{
      fontSize:20
    }
  });
