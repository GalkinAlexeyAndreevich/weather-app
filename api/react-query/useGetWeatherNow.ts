import { useQuery } from "@tanstack/react-query";
import {  getWeatherNow } from "../getWeather";

const useGetWeatherNow = (
    codeCity: string,
) =>
    useQuery(
        ["getWeatherNow", codeCity],
        () => getWeatherNow(codeCity),
        { cacheTime: 10000000000  }
    );
export default useGetWeatherNow;