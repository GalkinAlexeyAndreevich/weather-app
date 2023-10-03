import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import WeatherOnTwelveHour from "../../components/WeatherOnTwelveHour";
import WeatherOnFiveDays from "../../components/WeatherOnFiveDays";
import WeatherNow from "../../components/WeatherNow/WeatherNow";
import AdditionWeatherInfoNow from "../../components/AdditionWeatherInfoNow";
import React, { useContext, useEffect, useState } from "react";
import { getWeatherNow } from "../../api/getWeather";
import { IAdditionInfo, IColors, IWeatherNow } from "../../interfaces";
import { baseAdditionInfo, baseWeatherNow } from "../../config/dataForNoFetch";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/routes";
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from "../../store/ThemeContext";
import { useLocation } from "../../hooks/Location";

// export interface IProps {
// 	cityCode: string
// }

const cityData={
	Key:"293006",
	LocalizedName:"Калуга"
}

type TProps = NativeStackScreenProps<RootStackParamList, 'WeatherPage'>;

export default function WeatherPage({ navigation }: TProps) {
	
	// const {cityData} = useLocation()
	let cityCode = cityData.Key
	console.log(cityCode);
	

	
	const [weatherNow, setWeatherNow] = useState<IWeatherNow>(baseWeatherNow);

	const [additionInfo, setAdditionInfo] = useState<IAdditionInfo>(baseAdditionInfo);
	const loadSettingsPage = () => {
		navigation.navigate("SettingsPage")
	}
	const {theme,colors} = useTheme()
	console.log(colors);
	
	
	const styles = React.useMemo(() => getGlobalStyles( colors ), [colors]);
	useEffect(()=>{
		console.log(cityData);
		
	},[cityCode])

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
					<Ionicons style={styles.settings} name="settings-outline" size={24} color="dark" />
				</Pressable>
			  ),

			title:cityData.LocalizedName,
			headerTitleAlign:"center",

			  
			
		})
	},[colors,cityCode])
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
	if (!cityCode) return
	return (
		<View style={styles.container}>
			<ScrollView alwaysBounceVertical={true} horizontal={false} showsVerticalScrollIndicator={false} >


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
	  paddingTop: 20,
	  flexDirection: "column",
	//   backgroundColor:props.background
	},
	paragraph: {
	  fontSize: 20,
	//   color:props.text
	},
	row: {
	  flexDirection: "row",
	  alignItems: "center",
	  justifyContent: "center",
	//   width:350
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
