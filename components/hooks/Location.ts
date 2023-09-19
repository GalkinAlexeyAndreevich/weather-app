import * as Location from "expo-location";
import React, { useState, useEffect } from "react";
import { ICoordination, IDataCity } from "../../interfaces";
import { getCityData } from "../../api/getWeather";
type TLocation = Location.LocationObject | undefined
export const useLocation = () => {
	const [errorMsg, setErrorMsg] = useState<string>("");
    const [cityData, setCityData] = useState<IDataCity>({
        Key:"",
        LocalizedName:""
    });

	useEffect(() => {
		
		
		(async () => {
			console.log("test");
			let { status } = await Location.requestForegroundPermissionsAsync();
			console.log(status);
			
			if (status !== "granted") {
				setErrorMsg("Вы не разрешили узнать ваше местоположение");
				return;
			}
			
			let location: TLocation = await Location.getCurrentPositionAsync({});
			console.log(location);

			let coordination: ICoordination = location.coords;
			let dataCity = await getCityData(coordination);
            console.log(dataCity);
            if(!dataCity)return

			setCityData(dataCity);
		})();
	}, []);
	return { cityData, errorMsg };
};