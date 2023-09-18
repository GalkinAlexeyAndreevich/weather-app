import * as Location from "expo-location";
import React, { useState, useEffect } from "react";
export const useLocation = ()=>{
    const [location, setLocation] = useState<
    Location.LocationObject | undefined
>(undefined);
const [errorMsg, setErrorMsg] = useState<string>("");

useEffect(()=>{
    (async()=>{
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            setErrorMsg("Вы не разрешили узнать ваше местоположение");
            return;
        }
        let location = await Location.getCurrentPositionAsync({});
        console.log(location);

        setLocation(location);
        
    })()
},[])
return {location,errorMsg}
}