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
    // HasPrecipitation:boolean,
    // IsDaylight:boolean,
    Temperature:Value
}


export interface IDailyForecasts{
    Date:Date,
    Temperature:{Minimum:Value,Maximum:Value},
    Day:{Icon:number},
    Night:{Icon:number}
}

export interface IWeatherNow{
    WeatherIcon:string
    Temperature:{Metric:Value},
    WeatherText:string
}

export interface IAdditionInfo{
    Wind:{
        Direction:{
            Degrees:number,
            Localized:string
        },
        Speed:{
            Value:number,
            Unit:string
        }
    },
    Pressure:{
        Metric:Value
    },
    RelativeHumidity:number
}