type Value = {
    Value: number;
};

export interface ICoordination {
    latitude: number;
    longitude: number;
}
export interface IDataCity {
    Key: string;
    LocalizedName: string;
}

export interface IWeather {
    DateTime: Date;
    WeatherIcon: number;
    IconPhrase: string;
    Temperature: Value;
}

export interface IDailyForecasts {
    Date: Date;
    Temperature: { Minimum: Value; Maximum: Value };
    Day: { Icon: number };
    Night: { Icon: number };
}

export interface IWeatherNow {
    WeatherIcon: string;
    Temperature: { Metric: Value };
    WeatherText: string;
}

export interface IAdditionInfo {
    Wind: {
        Direction: {
            Degrees: number;
            Localized: string;
        };
        Speed: {
            Metric: {
                Value: number;
                Unit: string;
            };
        };
    };
    Pressure: {
        Metric: Value;
    };
    RelativeHumidity: number;
}

export type TWeatherAndAdditionNow = IWeatherNow & IAdditionInfo;

// export interface IColors {
//     primary: string;
//     background: string;
//     card: string;
//     text: string;
//     border: string;
//     notification: string;
// }
export interface IColors {
    background: string;
    text: string;
    primary:string;
    secondary:string;
    fontColor:string;
    bgColor:string;
    headingColor:string
}
