import axios from 'axios';
import { MarsPhotos, MarsWeather } from 'types/mars';

export const getMarsWeather = async (): Promise<MarsWeather> => {
  const { data } = await axios.get<MarsWeather>(
    `https://api.maas2.apollorion.com/`,
  );

  return data;
};

export const getMarsPhotos = async (): Promise<MarsPhotos[]> => {
  const {
    data: { photos },
  } = await axios.get<{ photos: MarsPhotos[] }>(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=${process.env.REACT_APP_API_KEY}`,
  );

  return photos;
};
