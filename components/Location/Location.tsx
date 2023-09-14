import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { API_KEY } from '../../config';
import axios from "axios"
import { getCodeCity } from '../../api/getWeather';

import * as Location from 'expo-location';
import { ICoordination } from '../../interfaces/coordination';
interface ICode{
  Key:string
}

export default function App() {
  const [location, setLocation] = useState<Location.LocationObject | undefined>();
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [codeCity, setCodeCity] = useState<string>('')

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
      let code = getCodeCity(coordination)
      console.log("1358235",code);
      
      // console.log(getCodeCity(coordination));
      
      // setCodeCity()

      

    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.paragraph}>{text}</Text> */}
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
