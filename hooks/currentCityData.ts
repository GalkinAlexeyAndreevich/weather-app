import { useEffect, useState } from "react";
import { setChosenPlace } from "../store/citySlice";
import { useAppDispatch } from "../store/hook";
import { useLocation } from "./Location";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getCityOnCode } from "../api/getWeather";

export const useCurrentCityData = ()=>{
    // const [currentCityData, setCurrentCityData] = useState()
    // const [searchBy, setSearchBy] = useState()
    const [result,setResult] = useState(false)

    // let cityCode = cityData.Key;
    const dispatch = useAppDispatch();
    // useEffect(() => {
    //     if (!cityCode) return;
    //     console.log("dispatch");

    //     dispatch(setChosenPlace(cityData));
    // }, [dispatch, cityCode]);
    useEffect(() => {
        const getCitySettings = async () => {
          try {
            const value = await AsyncStorage.getItem('citySettings')
            const data = value && JSON.parse(value)
            if(data.searchBy === "nameCity" && data.Key){
                const cityOnName = await getCityOnCode(data.Key)
                if(!cityOnName)return
                const {Key, EnglishName,LocalizedName} = cityOnName
                cityOnName && dispatch(setChosenPlace({Key, EnglishName,LocalizedName}));
            }else{
                const { cityData } = useLocation();
                dispatch(setChosenPlace(cityData));
            }
          } catch (error) {
            console.log('Error loading city info:', error);
            AsyncStorage.setItem('citySettings',JSON.stringify({
                searchBy:"location",
                Key:""
            }))
          }
        };
        getCitySettings();
        setResult(true)
      }, []);
      return result
    // const savedTheme = await AsyncStorage.getItem('theme');
}
