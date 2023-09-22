import { createStackNavigator } from "@react-navigation/stack";
import SettingsPage from "../Pages/SettingsPage/SettingsPage";
import TestPage from "../Pages/TestPage";
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const pages = {
    Settings:{
        screen: <SettingsPage />
    },
    Test:{
        screen: <TestPage />
    }
}

const Stack = createNativeStackNavigator();
export const AppNavigator = ()=>{
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Weather" component={SettingsPage} />
        <Stack.Screen name="Test" component={TestPage} />
      </Stack.Navigator>
    </NavigationContainer>
}