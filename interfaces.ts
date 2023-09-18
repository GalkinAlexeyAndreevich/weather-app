import * as Location from "expo-location";
type Value={
    Value:number
}

export interface ICoordination{
    latitude:number
    longitude:number
}
export type TCoordination  = ICoordination | undefined
export interface IWeather{
    DateTime:Date,
    WeatherIcon:number,
    IconPhrase:string,
    HasPrecipitation:boolean,
    IsDaylight:boolean,
    Temperature:Value
}
export interface IUseLocation{
	location:Location.LocationObject | undefined,
	errorMsg:string
}
  