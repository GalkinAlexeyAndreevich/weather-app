import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import WeatherOnTwelveHour from "../../components/WeatherOnTwelveHour";
import WeatherOnFiveDays from "../../components/WeatherOnFiveDays";
import WeatherNow from "../../components/WeatherNow/WeatherNow";
import AdditionWeatherInfoNow from "../../components/AdditionWeatherInfoNow";
import { useEffect, useState } from "react";
import { getWeatherNow } from "../../api/getWeather";
import { IAdditionInfo, IWeatherNow } from "../../interfaces";
import { additionInfo, baseWeatherNow } from "../../dataForNoFetch";

export interface IProps {
	cityCode: string
}


export default function WeatherPage({ cityCode }: IProps) {
	if (!cityCode) return
	const [weatherNow, setWeatherNow] = useState<IWeatherNow>();
	// const [additionInfo, setAdditionInfo] = useState<IAdditionInfo>();

	// useEffect(()=>{
	// 	(async () => {
	// 		const weather = await getWeatherNow(cityCode);
    //         console.log(weather);
	// 		if(!weather)return
	// 		const {WeatherIcon,Temperature,WeatherText, Wind,Pressure,RelativeHumidity}=weather
	// 		setWeatherNow({WeatherIcon,Temperature,WeatherText});
	// 		setAdditionInfo({Wind,Pressure,RelativeHumidity})
	// 	})();
	// },[])

	return (
		<View style={styles.container}>
			{baseWeatherNow && <WeatherNow weatherNow={baseWeatherNow}/>}
			<View style={styles.row}>
				<ScrollView horizontal={true}>
					{additionInfo &&<AdditionWeatherInfoNow additionInfo={additionInfo}/>}
					<WeatherOnTwelveHour codeCity={cityCode} />				
				</ScrollView>


			</View>	
			<WeatherOnFiveDays codeCity={cityCode} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginBottom:20,

	},
	paragraph: {
		fontSize: 20,
	},
	row:{
		display:"flex",
		flexDirection:"row"
	}
});
