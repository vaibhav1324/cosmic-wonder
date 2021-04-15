import React from 'react';
import { Apod } from 'types/apod';

export type PicOfDayProps = {
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
};

export type PicOfDayGeneratedProps = {
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
  data?: Apod;
  isLoading: boolean;
};
