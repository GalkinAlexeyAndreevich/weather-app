import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pressable, StyleSheet, Text, View, Switch } from "react-native";
import { RootStackParamList } from "../../routes/routes";
import { useTheme } from "../../store/ThemeContext";

type TProps = NativeStackScreenProps<RootStackParamList>;

function SettingsPage({ navigation }: TProps) {
    const { toggleTheme, theme } = useTheme();

    const loadTest = () => {
        navigation.navigate("TestPage");
    };
    return (
        <View style={styles.container}>
            <Pressable onPress={loadTest}>
                <Text>Открыть тестовую страницу</Text>
            </Pressable>
            <View style={styles.row}>
                <Text style={{paddingRight:50}}>Включить черную тему</Text>
                <Switch onValueChange={toggleTheme} value={theme === "dark"} />
            </View>

            {/* <Pressable onPress={toggleTheme}>
                <Text>Сменить тему</Text>
            </Pressable> */}
        </View>
    );
}

export default SettingsPage;

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginLeft: "auto",
        marginRight: "auto",
    },
    row: {
        display: "flex",
        flexDirection: "row",
        marginTop:30
    },
});
