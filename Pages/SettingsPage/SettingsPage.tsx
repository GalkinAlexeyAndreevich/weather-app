import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Pressable, Text, View } from "react-native";
import { RootStackParamList } from "../../routes/routes";

type TProps = NativeStackScreenProps<RootStackParamList>;


export default function SettingsPage({navigation}:TProps){
    const loadTest = ()=>{
        navigation.navigate("TestPage")
    }
    const loadWeather = ()=>{
        navigation.navigate("WeatherPage",{codeCity:"293006"})
    }
    return(
        <View>
            <Text>Я страница настроек</Text>
            <Pressable
            onPress={loadTest}
            >
            <Text>Открыть тестовую страницу</Text>
          </Pressable>
          <Pressable
            onPress={loadWeather}
            >
            <Text>Открыть погоду</Text>
          </Pressable>
        </View>
    )
}