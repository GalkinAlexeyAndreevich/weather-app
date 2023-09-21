import { ScrollView, StyleSheet, View } from "react-native";
import WeatherOnTwelveHour from "../../components/WeatherOnTwelveHour";
import WeatherOnFiveDays from "../../components/WeatherOnFiveDays";
import WeatherNow from "../../components/WeatherNow/WeatherNow";
import { NavigationContainer } from "@react-navigation/native";
import AdditionWeatherInfoNow from "../../components/AdditionWeatherInfoNow";
import { useEffect, useState } from "react";
import { getWeatherNow } from "../../api/getWeather";
import { IAdditionInfo, IWeatherNow } from "../../interfaces";

export interface IProps {
	cityCode: string
}
const additionInfo = {
    Wind:{
        Direction:{
            Degrees:260,
            Localized:'ЮЗ'
        },
        Speed:{
            Value:15,
            Unit:'km/h'
        }
    },
    Pressure:{
        Metric:{
			Value:1020
		}
    },
    RelativeHumidity:69
}

export default function WeatherPage({ cityCode }: IProps) {
	if (!cityCode) return
	console.log(cityCode);
	const [weather, setWeather] = useState<IWeatherNow & IAdditionInfo>();

	useEffect(()=>{
		(async () => {
			const weather = await getWeatherNow(cityCode);
                  console.log(weather);
			if(!weather)return
			setWeather(weather);
		})();
	},[])

	return (
		<View style={styles.container}>
			<WeatherNow codeCity={cityCode} />
			<View style={styles.row}>
				<ScrollView horizontal={true}>
					<AdditionWeatherInfoNow additionInfo={additionInfo}/>
					<WeatherOnTwelveHour codeCity={cityCode} />
				</ScrollView>

			</View>
			
			<WeatherOnFiveDays codeCity={cityCode} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginBottom:20
	},
	paragraph: {
		fontSize: 20,
	},
	row:{
		display:"flex",
		flexDirection:"row"
	}
});
