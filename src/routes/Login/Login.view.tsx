import React from 'react';
import { Button } from '@chakra-ui/button';
import { Flex, Stack } from '@chakra-ui/layout';
import { FormikInput } from 'components/primitives/FormikInput';
import { withMotion } from 'components/primitives/withMotion';
import { Form, Formik } from 'formik';
import { User } from 'types/user';
import { LoginGeneratedPrps } from './Login.props';
import * as Yup from 'yup';
import { theme } from 'theme/theme';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Please enter your full name'),
});

const View: React.FC<LoginGeneratedPrps> = ({ onSubmit }) => {
  return (
    <Flex
      flex={1}
      bg={theme.colors.bg[500]}
      direction="column"
      alignItems="center"
      justifyContent="center">
      <Formik<User>
        initialValues={{ id: '', name: '' }}
        onSubmit={(values) => onSubmit(values)}
        validationSchema={validationSchema}>
        {({ isSubmitting }) => {
          return (
            <Form>
              <Stack w="400px" spacing={4} borderRadius="10px">
                <FormikInput name="name" label="FULL NAME" color="white" />
                <Button isLoading={isSubmitting} type="submit" maxW="200px">
                  LOGIN
                </Button>
              </Stack>
            </Form>
          );
        }}
      </Formik>
    </Flex>
  );
};

export default withMotion(View);
