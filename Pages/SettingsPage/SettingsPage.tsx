import { Button, Text, View } from "react-native";

export default function SettingsPage({navigation}){
    const loadScene = ()=>{
        navigation.navigate("Weather",{cityCode:293006})
    }
    return(
        <View>
            <Text>Я страница настроек</Text>
            <Button title="Открыть тестовую страницу" onPress={loadScene}>Тестовая станица</Button>
        </View>
    )
}