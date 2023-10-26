import { useQuery } from "@tanstack/react-query";
import {  getWeatherOnTwelveHour } from "../getWeather";

const useGetWeatherOnTwelveHour = (
    codeCity: string,
) =>
    useQuery(
        ["getWeatherOnTwelveHour", codeCity],
        () => getWeatherOnTwelveHour(codeCity),
        { cacheTime: 10000000000  }
    );
export default useGetWeatherOnTwelveHour;
