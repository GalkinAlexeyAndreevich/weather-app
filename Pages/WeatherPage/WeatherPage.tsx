import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import WeatherOnTwelveHour from "../../components/WeatherOnTwelveHour";
import WeatherOnFiveDays from "../../components/WeatherOnFiveDays";
import WeatherNow from "../../components/WeatherNow/WeatherNow";
import AdditionWeatherInfoNow from "../../components/AdditionWeatherInfoNow";
import { useEffect, useState } from "react";
import { getWeatherNow } from "../../api/getWeather";
import { IAdditionInfo, IWeatherNow } from "../../interfaces";
import { baseAdditionInfo, baseWeatherNow } from "../../dataForNoFetch";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/routes";

// export interface IProps {
// 	cityCode: string
// }

type TProps = NativeStackScreenProps<RootStackParamList, 'WeatherPage'>;


export default function WeatherPage({ route,navigation }: TProps) {
	// if (!cityCode) return
	console.log(route);

	const [weatherNow, setWeatherNow] = useState<IWeatherNow>(baseWeatherNow);
	let cityCode = route.params.codeCity
	const [additionInfo, setAdditionInfo] = useState<IAdditionInfo>(baseAdditionInfo);
	const loadSettingsPage =()=>{
        navigation.navigate("SettingsPage")
    }
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
			<ScrollView alwaysBounceVertical={false} horizontal={false} showsVerticalScrollIndicator={false} >
				<View style={styles.citySettings}>
					<Text style={styles.title}>Город</Text>
					<Pressable
						onPress={loadSettingsPage}
						>
						<Text style={styles.settings}>Настройки</Text>
					</Pressable>
				</View>

				{weatherNow && <WeatherNow weatherNow={weatherNow} />}
				<View style={styles.row}>
					<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
						{additionInfo && <AdditionWeatherInfoNow additionInfo={additionInfo} />}
						<WeatherOnTwelveHour codeCity={cityCode} />
					</ScrollView>


				</View>
				<WeatherOnFiveDays codeCity={cityCode} />
			</ScrollView>
		</View>

	);
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 20,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		// marginTop: 200,
	},
	paragraph: {
		fontSize: 20,
	},
	row: {
		display: "flex",
		flexDirection: "row"
	},
	title: {
		display: "flex",
		justifyContent: "center",
		textAlign: "center"
	},
	settings:{
		display:"flex",
		textAlign:"right"
	},
	citySettings:{
		display: "flex",
		flexDirection: "row",
		alignItems:"center",
		justifyContent:"center"
	}
});
