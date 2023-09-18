import axios from "axios";
import { API_KEY } from "../config";
import { ICoordination,IDataCity, IWeather,IDailyForecasts,IWeatherNow } from "../interfaces";

interface IOnDay{
  DailyForecasts:IDailyForecasts[]
}


export const getCityData = async (coordination: ICoordination) => {
  try {
    console.log(coordination);

    const {latitude, longitude}:ICoordination = coordination
    const {data} = await axios.get<IDataCity>(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${String(latitude + ',' + longitude)}&language=ru`)
    return data
  } catch (e) {
    console.log("Ошибка");
  }
}

export const getWeatherOnOneDay = async(codeCity: string) => {

  try {
    const {data} =  await axios.get<IWeather>(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${codeCity}/?apikey=${API_KEY}&metric=true`)
    return data
  } catch (e) {
    console.log("Ошибка");
  }
}

export const getWeatherOnTwelveHour = async(codeCity:string)=>{
    try{
      console.log(codeCity);

      const {data} = await axios.get<IWeather[]>(
				`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${codeCity}/?apikey=${API_KEY}&metric=true`
			);
      return data
      }catch(e){
        console.log("Ошибка");
    }
}

export const getWeatherOnFiveDays = async(codeCity: string) => {
	try {
		console.log(codeCity);

		const {data} = await axios.get<IOnDay>(
			`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${codeCity}?apikey=${API_KEY}&metric=true&language=ru`
		);
		return data.DailyForecasts;
	} catch (e) {
		console.log("Ошибка");
	}
};

export const getWeatherNow = async(codeCity: string) => {
	try {
		console.log(codeCity);

		const {data} = await axios.get<IWeatherNow[]>(
			`http://dataservice.accuweather.com/currentconditions/v1/${codeCity}?apikey=${API_KEY}&language=ru`
		);
		return data[0];
	} catch (e) {
		console.log("Ошибка");
	}
};
