import * as Location from "expo-location";
import Geolocation from 'react-native-geolocation-service';
import React, { useState, useEffect } from "react";
import { ICoordination, IDataCity } from "../interfaces";
import { getCityDataOnCoordination } from "../api/getWeather";
import {PermissionsAndroid} from "react-native"
type TLocation = Location.LocationObject | undefined;
export const useLocation = () => {
	const [errorMsg, setErrorMsg] = useState<string>("");
	const [cityData, setCityData] = useState<IDataCity>({
		Key: "",
		LocalizedName: "",
		EnglishName:""
	});
	const [granted,setGranted] = useState(false)
	const requestLocationPermission = async () => {
		try {
		  const granted = await PermissionsAndroid.request(
			PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
			{
			  title: 'Geolocation Permission',
			  message: 'Can we access your location?',
			  buttonNeutral: 'Ask Me Later',
			  buttonNegative: 'Cancel',
			  buttonPositive: 'OK',
			},
		  );
		  console.log('granted', granted);
		  if (granted === 'granted') {
			console.log('You can use Geolocation');
			setGranted(true)
			return true;
		  } else {
			console.log('You cannot use Geolocation');
			return false;
		  }
		} catch (err) {
		  return false;
		}
	  };
	  const getLocation = async() => {
		const result = requestLocationPermission();
		result.then(res => {
		  console.log('res is:', res);
		  if (res) {
			Geolocation.getCurrentPosition(
			  position => {
				console.log(position);
			  },
			  error => {
				// See error code charts below.
				console.log(error.code, error.message);
			  },
			  {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
			);
		  }
		});
		console.log(location);
	};

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync()

			if (status !== "granted") {
				setErrorMsg("Вы не разрешили узнать ваше местоположение");
				return;
			}
			setGranted(true)
		})();
	}, []);

	useEffect(() => {
		(async () => {
			console.log("test");

			// console.log("now");
			
			// getLocation()

			let location: TLocation = await Location.getCurrentPositionAsync({});
			let coordination: ICoordination = location.coords;
			let dataCity = await getCityDataOnCoordination(coordination);
			console.log(dataCity);
			if (!dataCity) return;

			setCityData(dataCity);
		})();
	}, [granted]);


	return { cityData, errorMsg };
};
