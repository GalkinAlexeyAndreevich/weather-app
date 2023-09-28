// import { createStackNavigator } from "@react-navigation/stack";
import SettingsPage from "../Pages/SettingsPage";
import TestPage from "../Pages/TestPage";
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WeatherPage from "../Pages/WeatherPage";


export type RootStackParamList = {
  SettingsPage: undefined;
  WeatherPage: { codeCity: string };
  TestPage: undefined;
};



const Stack = createNativeStackNavigator<RootStackParamList>();
export const AppNavigator = ()=>{
  return(    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WeatherPage">
        <Stack.Screen name="SettingsPage" component={SettingsPage} />
        <Stack.Screen name="TestPage" component={TestPage} />
        <Stack.Screen name="WeatherPage" component={WeatherPage} initialParams={{codeCity:"293006"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )

}