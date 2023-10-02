import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import WeatherOnTwelveHour from "../../components/WeatherOnTwelveHour";
import WeatherOnFiveDays from "../../components/WeatherOnFiveDays";
import WeatherNow from "../../components/WeatherNow/WeatherNow";
import AdditionWeatherInfoNow from "../../components/AdditionWeatherInfoNow";
import React, { useEffect, useState } from "react";
import { getWeatherNow } from "../../api/getWeather";
import { IAdditionInfo, IColors, IWeatherNow } from "../../interfaces";
import { baseAdditionInfo, baseWeatherNow } from "../../config/dataForNoFetch";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/routes";
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from "../../store/ThemeContext";
import { Colors } from "../../config/theme";

// export interface IProps {
// 	cityCode: string
// }

type TProps = NativeStackScreenProps<RootStackParamList, 'WeatherPage'>;

export default function WeatherPage({ route, navigation }: TProps) {
	// if (!cityCode) return
	console.log(route);
	
	const [weatherNow, setWeatherNow] = useState<IWeatherNow>(baseWeatherNow);
	let cityCode = route.params.codeCity
	const [additionInfo, setAdditionInfo] = useState<IAdditionInfo>(baseAdditionInfo);
	const loadSettingsPage = () => {
		navigation.navigate("SettingsPage")
	}

	const {theme} = useTheme()
	const colors:IColors = Colors[theme=="dark"?"light":"dark"]
	
	const styles = React.useMemo(() => getGlobalStyles( colors ), [colors]);
	

	useEffect(()=>{
		navigation.setOptions({
			headerLeft:()=>(
				<Pressable
				style={{
					display:"flex",
					alignItems:"center",
				}}
				>
					<Ionicons name="menu" size={24} color="black" />
				</Pressable>
			  ),
			headerRight: () => (
				<Pressable
				onPress={loadSettingsPage}
				>
					<Ionicons style={styles.settings} name="settings-outline" size={24} color="black" />
				</Pressable>
			  ),

			  title:"Калуга",
			  headerTitleAlign:"center"
		})
	})
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

				{/* <Text style={styles.title}>Город</Text> */}

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

// const styles = StyleSheet.create({
// 	container: {
// 		display: "flex",
// 		alignItems: "center",
// 		justifyContent: "center",
		
// 	},
// 	paragraph: {
// 		fontSize: 20,
// 	},
// 	row: {
// 		display: "flex",
// 		flexDirection: "row"
// 	},
// 	title: {
// 		display: "flex",
// 		textAlign:"center",
// 		justifyContent:"center",
// 		fontSize: 20,
// 	},
// 	settings: {
// 	// 	marginLeft: "auto",
// 		marginRight: 10,
// 	// 	marginTop: 50,
// 	},

// });

const getGlobalStyles = (props:IColors) => StyleSheet.create({
	container: {
	  display: "flex",
	  justifyContent: "center",
	  alignItems: "center",
	  marginTop: 20,
	  flexDirection: "column",
	  backgroundColor:props.background
	},
	paragraph: {
	  fontSize: 20,
	  color:props.text
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
	  color:props.text
	},
	settings: {
		// 	marginLeft: "auto",
			marginRight: 10,
		// 	marginTop: 50,
	},
});
