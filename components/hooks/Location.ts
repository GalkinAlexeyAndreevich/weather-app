import * as Location from "expo-location";
import React, { useState, useEffect } from "react";
import { ICoordination, IDataCity } from "../../interfaces";
import { getCodeCity } from "../../api/getWeather";
type TLocation = Location.LocationObject | undefined
// export interface IDataCity {
// 	Key:string,
//       LocalizedName:string
// }
export const useLocation = () => {
	const [errorMsg, setErrorMsg] = useState<string>("");
      const [dataCity, setDataCity] = useState<IDataCity>();

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				setErrorMsg("Вы не разрешили узнать ваше местоположение");
				return;
			}
			let location: TLocation = await Location.getCurrentPositionAsync({});
			console.log(location);

			let coordination: ICoordination = location.coords;
			let code = await getCodeCity(coordination);
			let { Key, LocalizedName } = code?.data;

			setDataCity({ Key, LocalizedName });
		})();
	}, []);
	return { dataCity, errorMsg };
};
