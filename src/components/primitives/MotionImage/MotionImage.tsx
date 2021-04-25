import React from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import { Image, ImageProps } from '@chakra-ui/image';

type Merge<P, T> = Omit<P, keyof T> & T;
export type MotionImageProps = Merge<ImageProps, HTMLMotionProps<'div'>>;

const MotionImage: React.FC<MotionImageProps> = motion(Image);

export default MotionImage;
