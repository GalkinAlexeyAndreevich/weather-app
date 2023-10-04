import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";

export default function SearchCityPage() {
    const inputAccessoryViewID = "uniqueID";
    const initialText = "";
    const [text, setText] = useState(initialText);
    const handleChangeCity = () => {
        console.log(text);
    };
    return (
        <View>
            <Text>SearchCityPage</Text>
            <View style={styles.row}>
                <ScrollView keyboardDismissMode="interactive">
                    <TextInput
                        inputAccessoryViewID={inputAccessoryViewID}
                        onChangeText={setText}
                        value={text}
                        placeholder={"Введите место"}
                    />
                </ScrollView>
                <Pressable onPress={() => setText(initialText)}>
                    <AntDesign name="close" size={24} color="black" />
                </Pressable>
                <Pressable onPress={handleChangeCity}>
                    <AntDesign name="search1" size={24} color="black" />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    row:{
        display:"flex",
        flexDirection:"row",
        marginTop:10,
        padding:5
    }
});
