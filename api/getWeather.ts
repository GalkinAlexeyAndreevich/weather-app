import axios,{AxiosResponse} from "axios";
import { API_KEY } from "../config";
import { ICoordination } from "../interfaces/coordination";
export const getCodeCity = ({latitude,longitude}:ICoordination):string | void=>{
    try{
        axios.get(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${String(latitude +',' +longitude)}`).then((response:AxiosResponse)=>{
          console.log("djghskd",response.data.Key);   
          return response.data.Key
        })
      }catch(e){
        console.log("Ошибка");
      }
}

export const getWeatherOnOneDay = (codeCity:number)=>{

    try{
        axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${codeCity}/?apikey=${API_KEY}`).then((response)=>{
          console.log(response.data.DailyForecasts);   
          return response.data.DailyForecasts
        })
      }catch(e){
        console.log("Ошибка");
    }
}

export const getWeatherOnTvelweHour = (codeCity:number)=>{
    try{
        axios.get(`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${codeCity}/?apikey=${API_KEY}`).then((response)=>{
          console.log(response.data);   
          return response.data
        })
      }catch(e){
        console.log("Ошибка");
    }
}

