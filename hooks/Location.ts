import * as Location from "expo-location";
import React, { useState, useEffect } from "react";
import { ICoordination, IDataCity } from "../interfaces";
import { getCityDataOnCoordination } from "../api/getWeather";
type TLocation = Location.LocationObject | undefined;
export const useLocation = () => {
	const [errorMsg, setErrorMsg] = useState<string>("");
	const [cityData, setCityData] = useState<IDataCity>({
		Key: "",
		LocalizedName: "",
		EnglishName:""
	});
	const [granted,setGranted] = useState(false)

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
