import { useQuery } from "@tanstack/react-query";
import { getWeatherOnFiveDays } from "../getWeather";

const useGetWeatherOnFiveDays = (
    codeCity: string,
) =>
    useQuery(
        ["getWeatherOnFiveDays", codeCity],
        () => getWeatherOnFiveDays(codeCity),
        { cacheTime: 10000000000  }
    );
export default useGetWeatherOnFiveDays;
