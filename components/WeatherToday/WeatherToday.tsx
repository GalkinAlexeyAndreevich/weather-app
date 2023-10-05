import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState,useEffect } from "react";
import { IAdditionInfo, IWeatherNow } from "../../interfaces";
import { baseAdditionInfo, baseWeatherNow } from "../../config/dataForNoFetch";
import WeatherNow from "../WeatherNow";
import AdditionWeatherInfoNow from "../AdditionWeatherInfoNow";
import WeatherOnTwelveHour from "../WeatherOnTwelveHour";
import { useAppSelector } from "../../store/hook";
import { getWeatherNow } from "../../api/getWeather";

export default function WeatherToday() {
    const { Key } = useAppSelector((state) => state.city);
    const [weatherNow, setWeatherNow] = useState<IWeatherNow>(baseWeatherNow);
    const [additionInfo, setAdditionInfo] = useState<IAdditionInfo>(baseAdditionInfo);
    // useEffect(() => {
    //     (async () => {
    //         if (!Key) return;
    //         const weather = await getWeatherNow(Key);
    //         console.log(weather);
    //         if (!weather) return;
    //         const {
    //             WeatherIcon,
    //             Temperature,
    //             WeatherText,
    //             Wind,
    //             Pressure,
    //             RelativeHumidity,
    //         } = weather;
    //         setWeatherNow({ WeatherIcon, Temperature, WeatherText });
    //         setAdditionInfo({ Wind, Pressure, RelativeHumidity });
    //     })();
    // }, [Key]);
    return (
        <View>
            {weatherNow && <WeatherNow weatherNow={weatherNow} />}
            <View style={styles.row}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {additionInfo && (
                        <AdditionWeatherInfoNow additionInfo={additionInfo} />
                    )}
                    <WeatherOnTwelveHour />
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20,
        flexDirection: "column",
        //   backgroundColor:props.background
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        //   width:350
    },
});
