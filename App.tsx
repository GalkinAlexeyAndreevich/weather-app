import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Location from "./components/Location";
import Loading from "./components/Loading";
import WeatherPage from "./Pages/WeatherPage";
import { useLocation } from "./components/hooks/Location";

export default function App() {
	const { dataCity, errorMsg } = useLocation();
      console.log(dataCity);

      if(errorMsg){
            return(		<View style={styles.container}>
                  <Text>{errorMsg}</Text>
			{/* <Loading /> */}
		</View>)
      }else if(dataCity){
            return(		<View style={styles.container}>
			<Location dataCity ={dataCity}/>
			<WeatherPage />
			{/* <Loading /> */}
		</View>)
      }else{
            <Loading/>
      }



}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "green",
		alignItems: "center",
		justifyContent: "center",
	},
});
