import axios, { AxiosResponse } from 'axios';
import { Apod } from 'types/apod';

const URL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`;

export const getPicOfTheDay = async (): Promise<Apod> => {
  const { data } = await axios.get<Apod>(URL);
  return data;
};
