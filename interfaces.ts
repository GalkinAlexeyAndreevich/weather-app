type Value={
    Value:number
}

export interface ICoordination{
    latitude:number
    longitude:number
}
export interface IDataCity {
	Key: string;
	LocalizedName: string;
}

export interface IWeather{
    DateTime:Date,
    WeatherIcon:number,
    IconPhrase:string,
    HasPrecipitation:boolean,
    IsDaylight:boolean,
    Temperature:Value
}


export interface IDailyForecasts{
    Date:Date,
    Temperature:{Minimum:Value,Maximum:Value}
}
  
export interface IWeatherNow{
    WeatherIcon:string
    Temperature:{Metric:Value}
}
