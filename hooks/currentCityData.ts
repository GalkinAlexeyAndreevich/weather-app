import { useEffect, useState } from "react";
import { setChosenPlace, setKey, setSearchBy } from "../store/citySlice";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { useLocation } from "./Location";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getCityOnCode } from "../api/getWeather";

export const useCurrentCityData = () => {
  const [result, setResult] = useState(false)
  const {searchBy,Key:key} = useAppSelector(state=>state.city)
  const [localData, setLocalData] = useState({
    searchBy: "",
    Key: ""
  })
  const { cityData } = useLocation()
  console.log(cityData);
  console.log(searchBy,key);
  
  
  // let cityData = ""
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log("effect1");
    
    const getFromLocal = async () => {
      const value = await AsyncStorage.getItem('citySettings')
      const parseData = value && JSON.parse(value)
      if (!parseData && !parseData.searchBy) {
        let clearLocal = {
          searchBy: "currentPlace",
          Key: ""
        }
        AsyncStorage.setItem('citySettings', JSON.stringify(clearLocal))
        setLocalData(clearLocal)
        dispatch(setSearchBy(clearLocal.searchBy))
        return
      }
      setLocalData(parseData)
      dispatch(setKey(parseData.Key))
      dispatch(setSearchBy(parseData.searchBy))
    }
    getFromLocal()
  }, [])
  useEffect(() => {
    const getCitySettings = async () => {
      try {
        console.log(searchBy,key);
        
        if (searchBy === "nameCity" && key) {

          const cityOnName = await getCityOnCode(key)
          if (!cityOnName) return
          const { Key, EnglishName, LocalizedName } = cityOnName
          cityOnName && dispatch(setChosenPlace({ Key, EnglishName, LocalizedName }));
          setResult(true)

        } else if (searchBy == "currentPlace") {
          console.log("dispatch34");
          
          cityData && dispatch(setChosenPlace(cityData));
          setResult(true)
        }
        console.log("dispatch data");

      } catch (error) {
        console.log('Error loading city info:', error);
      }
    };
    getCitySettings();
    
  }, [searchBy,key,cityData]);

  return result
  // const savedTheme = await AsyncStorage.getItem('theme');
}
