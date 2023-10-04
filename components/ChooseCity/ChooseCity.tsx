import { View, Text, Switch, Pressable } from "react-native";
import { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/routes";

type TProps = NativeStackScreenProps<RootStackParamList>;
function ChooseCity({navigation}:TProps): JSX.Element {
    const [isCurrentPlace, setIsCurrentPlace] = useState();
    const handlerCurrentPlace = () => {};
    return (
        <View>
            <Text>Место</Text>
            <View>
                
                <Pressable   onPress={handlerCurrentPlace}>
                    <Text>Текущее место</Text>
                </Pressable>
                <Pressable   onPress={()=>{
                    navigation.navigate("SearchCityPage");
                }}>
                    <Text>Задать другое</Text>
                </Pressable>
            </View>
            
        </View>
    );
}
export default ChooseCity;
