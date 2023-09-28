import {
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Location from "./components/Location";
import Loading from "./components/Loading";
import WeatherPage from "./Pages/WeatherPage";
import { useLocation } from "./hooks/Location";
import { AppNavigator } from "./routes/routes";
import { NavigationContainer } from "@react-navigation/native";
import TestPage from "./Pages/TestPage";
import SettingsPage from "./Pages/SettingsPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

let cityData = {
  LocalizedName: "Калуга",
  Key: "293006",
};
let errorMsg = "";
const Stack = createNativeStackNavigator();
export default function App() {
  // const { cityData, errorMsg } = useLocation();
  // console.log(cityData);

//   if (errorMsg) {
//     return (
//       <View style={styles.container}>
//         <Text>{errorMsg}</Text>
//       </View>
//     );
//   } else if (cityData) {
//     return (
//       <SafeAreaView style={styles.container}>
//         <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} >
//           <Pressable
//             onPress={() => {
//               console.log("press");
//             }}
//           >
//             <Text>Настройки</Text>
//           </Pressable>
//           <Location nameCity={cityData.LocalizedName} />
//           <WeatherPage cityCode={cityData.Key} />
//         </ScrollView>
//       </SafeAreaView>
//     );
//   } else {
//     return (
//       <View style={styles.container}>
//         <Loading />
//       </View>
//     );
//   }
return(
  <View style={styles.container}>
   <AppNavigator/>
  </View>
 
	
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // marginTop: 100,
  },
});
