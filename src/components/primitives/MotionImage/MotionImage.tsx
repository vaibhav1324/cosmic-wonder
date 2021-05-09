import React from 'react';

import { Image, ImageProps } from '@chakra-ui/image';
import { HTMLMotionProps, motion } from 'framer-motion';

type Merge<P, T> = Omit<P, keyof T> & T;
export type MotionImageProps = Merge<ImageProps, HTMLMotionProps<'div'>>;

const MotionImage: React.FC<MotionImageProps> = motion(Image);

export default MotionImage;
