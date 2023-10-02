import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pressable, StyleSheet, Text, View,Appearance } from "react-native";
import { RootStackParamList } from "../../routes/routes";
import { useTheme } from "../../store/ThemeContext";
type TProps = NativeStackScreenProps<RootStackParamList>;

function SettingsPage({ navigation }: TProps) {
    const {toggleTheme,theme} = useTheme()
    // const setTheme=()=>{
    //     toggleTheme()
    // }
    const loadTest = () => {
        navigation.navigate("TestPage")
    }
    return (
        <View  style={styles.container}>
                <Pressable
                    onPress={loadTest}
                >
                    <Text>Открыть тестовую страницу</Text>
                </Pressable>

                <Pressable
                    onPress={toggleTheme}
                >
                    <Text>Сменить тему</Text>
                </Pressable>


        </View>
    )
}


export default SettingsPage

const styles = StyleSheet.create({
    container: {
        marginTop:50,
        marginLeft: "auto",
        marginRight: "auto",
    },



});