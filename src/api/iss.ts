import axios from 'axios';

import { ISSLocation } from '../types/iss';

export const getISSCurrentLocation = async (): Promise<ISSLocation> => {
  const { data } = await axios.get<ISSLocation>(
    'http://api.open-notify.org/iss-now.json',
  );

  return data;
};
