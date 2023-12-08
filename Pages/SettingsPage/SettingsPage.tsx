import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pressable, StyleSheet, Text, View,Switch } from "react-native";
import { RootStackParamList } from "../../routes/routes";
import { useTheme } from "../../store/ThemeContext";
import ChooseCity from "../../components/ChooseCity/ChooseCity";
import { useEffect } from "react";

type TProps = NativeStackScreenProps<RootStackParamList>;

function SettingsPage({ navigation,route }: TProps) {
    const { toggleTheme, theme,colors } = useTheme();
    useEffect(()=>{
        navigation.setOptions({
            headerStyle: {
                backgroundColor: colors.background,
            },
            headerTitleStyle:{
                color: colors.text,
            },
            headerTintColor: colors.iconColor
        });
    },[colors])

    const loadTest = () => {
        navigation.navigate("TestPage");
    };
    return (
        <View style={[
            styles.container,
            {
                backgroundColor: colors.background,
            },
        ]}>
            <View style={styles.row}>
                <Text style={{paddingRight:10, color:colors.text, fontSize:18}}>Включить черную тему</Text>
                <Switch style={{marginVertical:0, paddingVertical:0}} onValueChange={toggleTheme} value={theme === "black"} />
            </View>
            <ChooseCity {...{navigation,route }}/>
        </View>
    );
}

export default SettingsPage;

const styles = StyleSheet.create({
    container: {
        paddingBottom: 50,
        paddingHorizontal:40,
        // marginHorizontal: "auto",
        // paddingRight: "auto",
        flex:1,

        // justifyContent:"center"
    },
    row: {
        display: "flex",
        flexDirection: "row",
        alignItems:"center",
        flexWrap:"wrap",
        marginTop:30
    },
});
