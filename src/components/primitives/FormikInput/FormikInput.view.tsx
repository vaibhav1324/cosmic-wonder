import React from 'react';

import { Input } from '@chakra-ui/input';
import { Box, Text } from '@chakra-ui/layout';
import { useField } from 'formik';

import { FormikInputProps } from './FormikInput.props';

const FormikInput: React.FC<FormikInputProps> = ({ name, label, ...props }) => {
  const [{ value }, meta, { setValue }] = useField(name);

  return (
    <Box>
      {label && (
        <Text mb={1} fontSize="md" fontWeight="600" color="#afafaf">
          {label}
        </Text>
      )}
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...props}
      />
      {meta.touched && meta.error && (
        <Text mt={1} color="red.500" fontSize="xs" fontWeight="500">
          {meta.error}
        </Text>
      )}
    </Box>
  );
};

export default FormikInput;
