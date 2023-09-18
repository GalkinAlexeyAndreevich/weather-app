import { StyleSheet, View } from "react-native";
import {useEffect} from "react"
import WeatherOnTwelveHour from "../../components/WeatherOnTwelveHour";
import { useLocation } from "../../components/hooks/Location";

export default function WeatherPage() {
      const { dataCity } = useLocation();
      useEffect(() => {
            (async()=>{

            })()

      }, [])
      if(!dataCity)return
      console.log(dataCity);

	return (
		<View style={styles.container}>
			<WeatherOnTwelveHour codeCity={dataCity.Key} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		// gap:10
	},
	paragraph: {
		fontSize: 20,
	},
});
