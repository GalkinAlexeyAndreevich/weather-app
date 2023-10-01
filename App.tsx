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
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  )
}

let bool = false
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // marginTop: 100,
  },
});
