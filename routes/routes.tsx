// import { createStackNavigator } from "@react-navigation/stack";
import SettingsPage from "../Pages/SettingsPage";
import TestPage from "../Pages/TestPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WeatherPage from "../Pages/WeatherPage";


export type RootStackParamList = {
  SettingsPage: undefined;
  WeatherPage: { codeCity: string };
  TestPage: undefined;
};

// const stack = {
//   SettingsPage:{
//     screen:SettingsPage,
//     options:{
//       title:"Настройки"
//     }
//   },
//   TestPage:{
//     screen:TestPage,
//   },
//   WeatherPage:{
//     screen:WeatherPage,
//     initialParams:{ codeCity: "293006" } 
//   },
// }



const Stack = createNativeStackNavigator<RootStackParamList>();
export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      // screenOptions={{
      //     headerShown: false
      //   }}
        initialRouteName="WeatherPage">
        <Stack.Screen name="SettingsPage" component={SettingsPage} options={{
          title:"Настройки"
        }}/>
        <Stack.Screen name="TestPage" component={TestPage} />
        <Stack.Screen name="WeatherPage" component={WeatherPage} initialParams={{ codeCity: "293006" }} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}


