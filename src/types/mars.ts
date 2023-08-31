export type MarsWeather = {
  status: number;
  id: number;
  terrestrial_date: string;
  ls: number;
  season: string;
  min_temp: number;
  max_temp: number;
  pressure: number;
  pressure_string: string;
  abs_humidity: null;
  wind_speed: null;
  atmo_opacity: string;
  sunrise: string;
  sunset: string;
  local_uv_irradiance_index: string;
  min_gts_temp: number;
  max_gts_temp: number;
  wind_direction: null;
  sol: number;
  unitOfMeasure: string;
  TZ_Data: string;
};

export type MarsPhotos = {
  camera: {
    full_name: string;
    id: number;
    name: string;
    rover_id: number;
  };
  earth_date: string;
  id: number;
  img_src: string;
  sol: number;
  rover: {
    id: number;
    status: string;
    launch_date: string;
    landing_date: string;
    name: string;
  };
};
