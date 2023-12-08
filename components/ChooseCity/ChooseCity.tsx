import { View, Text, Switch, Pressable } from "react-native";
import { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/routes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { useLocation } from "../../hooks/Location";
import { setChosenPlace, setSearchBy } from "../../store/citySlice";
import { IColors } from "../../interfaces";
import { useTheme } from "../../store/ThemeContext";
import SearchCityPage from "../../Pages/SearchCityPage";

type TProps = NativeStackScreenProps<RootStackParamList>
function ChooseCity({navigation}:TProps): JSX.Element {
    const [isCurrentPlace, setIsCurrentPlace] = useState();
    const { colors } = useTheme();
    const searchBy = useAppSelector(state=>state.city.searchBy)
    const dispatch = useAppDispatch()
    const handlerCurrentPlace = () => {
        AsyncStorage.setItem('citySettings',JSON.stringify({
            searchBy:"currentPlace",
            Key:""
        }))
        dispatch(setSearchBy("currentPlace"))
    };
    const openSearchCity = () => {
        dispatch(setSearchBy("nameCity"))
    };
    console.log(colors.text);
    console.log(searchBy);
    
    return (
        <View style={[{backgroundColor:colors.background, paddingTop:20}]}>
            <Text style={{color:colors.text, fontSize:20}}>Место</Text>
            <View style={{paddingTop:10}}>
                <Pressable   onPress={handlerCurrentPlace}>
                    <Text style={{color:colors.text,paddingVertical:10, paddingHorizontal:10, borderWidth:searchBy=="currentPlace"?1:0, borderColor:colors.text, maxWidth:150}}>Текущее место</Text>
                </Pressable>
                <Pressable   onPress={openSearchCity}>
                    <Text style={{color:colors.text,paddingVertical:10, paddingHorizontal:10, borderWidth:searchBy=="nameCity"?1:0, borderColor:colors.text, maxWidth:150}}>Задать другое</Text>
                </Pressable>
            </View>
            {searchBy=="nameCity"&&<SearchCityPage />}
        </View>
    );
}
export default ChooseCity;
