import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../../routes/routes";
import { Ionicons } from '@expo/vector-icons';

type TProps = NativeStackScreenProps<RootStackParamList>;


export default function SettingsPage({ navigation }: TProps) {
    const loadTest = () => {
        navigation.navigate("TestPage")
    }
    const loadWeather = () => {
        navigation.navigate("WeatherPage", { codeCity: "293006" })
    }
    return (
        <View  style={styles.container}>
                <Pressable
                    onPress={loadTest}
                >
                    <Text>Открыть тестовую страницу</Text>
                </Pressable>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:50,
        marginLeft: "auto",
        marginRight: "auto",
    },


});