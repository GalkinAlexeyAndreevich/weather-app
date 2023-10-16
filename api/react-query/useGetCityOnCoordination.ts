import { useQuery } from '@tanstack/react-query';
import { getCityDataOnCoordination } from '../getWeather';
import { ICoordination } from '../../interfaces';


const useGetCityDataOnCoordintaion = (coordination:ICoordination,enabled:boolean) => useQuery([ 'getDataOnCoordination', coordination ], () => getCityDataOnCoordination(coordination), {enabled: enabled,refetchInterval:1200000,cacheTime:1200000});
export default useGetCityDataOnCoordintaion;