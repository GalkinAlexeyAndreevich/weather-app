import axios, { AxiosResponse } from "axios";
import { API_KEY } from "../config";
import { ICoordination } from "../interfaces/coordination";


export const getCodeCity = async (coordination: ICoordination) => {
  try {
    console.log(coordination);
    
    const {latitude, longitude}:ICoordination = coordination
    const response = axios.get(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${String(latitude + ',' + longitude)}`)
    return response
  } catch (e) {
    console.log("Ошибка");
  }
}

export const getWeatherOnOneDay = (codeCity: string) => {

  try {
    const response = axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${codeCity}/?apikey=${API_KEY}`)
    return response
  } catch (e) {
    console.log("Ошибка");
  }
}

export const getWeatherOnTvelweHour = (codeCity:string)=>{
    try{
      console.log(codeCity);
      
      const response = axios.get(`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${codeCity}/?apikey=${API_KEY}`)
      return response
      }catch(e){
        console.log("Ошибка");
    }
}

