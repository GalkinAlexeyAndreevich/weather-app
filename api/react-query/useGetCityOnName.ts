import { useQuery } from "@tanstack/react-query";
import { getCityDataOnName } from "../getWeather";

const useGetCityDataOnName = (cityName: string, enabled: boolean) =>
    useQuery(
        ["getCityDataOnName", cityName],
        () => getCityDataOnName(cityName),
        { enabled: enabled,cacheTime: 10000000000  }
    );
export default useGetCityDataOnName;
