import axios from 'axios';
import { MarsWeather } from 'types/mars';

export const getMarsWeather = async (): Promise<MarsWeather> => {
  const { data } = await axios.get<MarsWeather>(
    `https://api.maas2.apollorion.com/`,
  );

  return data;
};
