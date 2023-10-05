import { useEffect, useState } from "react";
import { setChosenPlace } from "../store/citySlice";
import { useAppDispatch } from "../store/hook";
import { useLocation } from "./Location";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getCityOnCode } from "../api/getWeather";

export const useCurrentCityData = ()=>{
    const [result,setResult] = useState(false)
    const { cityData } = useLocation();
    const dispatch = useAppDispatch();
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
              cityData && dispatch(setChosenPlace(cityData));
            }
            console.log("dispatch data");
            
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
      }, [cityData]);
      return result
    // const savedTheme = await AsyncStorage.getItem('theme');
}
