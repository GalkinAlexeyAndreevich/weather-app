import { useQuery } from "@tanstack/react-query";
import { getCityDataOnCoordination } from "../getWeather";
import { ICoordination } from "../../interfaces";

const useGetCityDataOnCoordination = (
    coordination: ICoordination,
    enabled: boolean
) =>
    useQuery(
        ["getCityDataOnCoordination", coordination],
        () => getCityDataOnCoordination(coordination),
        { enabled: enabled, cacheTime: 10000000000 }
    );
export default useGetCityDataOnCoordination;
