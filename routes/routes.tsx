import SettingsPage from "../Pages/SettingsPage";
import TestPage from "../Pages/TestPage";
import {NavigationContainer, DarkTheme,DefaultTheme} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WeatherPage from "../Pages/WeatherPage";
import { useColorScheme,Appearance } from 'react-native';
import { useEffect, useState } from "react";
// import { useColorScheme } from "nativewind";

export type RootStackParamList = {
  SettingsPage: undefined;
  WeatherPage: { codeCity: string };
  TestPage: undefined;
  DrawerNavigator: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();
export const AppNavigator = () => {
  
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WeatherPage">
        <Stack.Screen name="SettingsPage"
          component={SettingsPage}
          options={{
            title: "Настройки"
          }}
        />
        <Stack.Screen name="TestPage" component={TestPage} />
        <Stack.Screen name="WeatherPage" component={WeatherPage} initialParams={{ codeCity: "293006" }} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}


