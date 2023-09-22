import { Pressable, Text, View } from "react-native";

export default function TestPage({navigation}){
    const loadPage =()=>{
        navigation.navigate("Settings")
    }
    return(
        <View>
            <Text>Я тестовая страница</Text>
            <Pressable
            onPress={loadPage}
            >
            <Text>Настройки</Text>
          </Pressable>
        </View>
    )
}