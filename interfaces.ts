type Value={
    Value:number
}

export interface ICoordination{
    latitude:number
    longitude:number
}

export interface IWeather{
    DateTime:Date,
    WeatherIcon:number,
    IconPhrase:string,
    HasPrecipitation:boolean,
    IsDaylight:boolean,
    Temperature:Value
}

export interface IDataCity {
	Key: string;
	LocalizedName: string;
}
