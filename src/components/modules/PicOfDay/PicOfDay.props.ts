import { Apod } from 'types/apod';

export type PicOfDayProps = {};

export type PicOfDayGeneratedProps = {
  data?: Apod;
  isLoading: boolean;
};
