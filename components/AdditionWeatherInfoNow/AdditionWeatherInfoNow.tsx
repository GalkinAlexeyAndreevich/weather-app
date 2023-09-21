import React, { useState, useEffect } from "react";
import {View, StyleSheet, ScrollView, Text } from "react-native";
import { IAdditionInfo } from "../../interfaces";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from '@expo/vector-icons'; 

interface IProps{
	additionInfo:IAdditionInfo
}
const mbToMMHG = (mb:number)=>{
    return Math.round(mb*0.750062)
}
const kmHToMc = (speed:number)=>{
    return Math.round(speed*0.750062)
}

export default function AdditionWeatherInfoNow({additionInfo}: IProps) {
    console.log(additionInfo);

	// const [additionInfo, setAdditionInfo] = useState<IAdditionInfo>();
    if(!additionInfo)return


	return (
		<View style={styles.container}>
            <View style={styles.row}>
                <MaterialCommunityIcons  name="weather-windy" size={24}></MaterialCommunityIcons>
                <Text style={styles.paragraph}>{kmHToMc(additionInfo.Wind.Speed.Value)}м/с,{additionInfo.Wind.Direction.Localized}</Text>
            </View>
            <View style={styles.row}>
                <SimpleLineIcons name="speedometer" size={24} />
                <Text style={styles.paragraph}>{mbToMMHG(additionInfo.Pressure.Metric.Value)} мм рт. ст.</Text>
            </View>
            <View style={styles.row}>
                <SimpleLineIcons name="drop" size={24}  />
                <Text style={styles.paragraph}>{additionInfo.RelativeHumidity}%</Text>
            </View>
           
           
           
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
        paddingLeft:10,
        maxWidth:150
	},
	paragraph: {
		fontSize: 15,
        display:"flex",
        textAlign: "center",
        textAlignVertical:"center",
        paddingLeft:4
        
	},
    row:{
        display:"flex",
        flexDirection:"row",
        paddingBottom:4
    }
});
