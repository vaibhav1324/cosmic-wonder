import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Flex } from '@chakra-ui/layout';
import { withMotion } from 'components/primitives/withMotion';
import { Form, Formik } from 'formik';
import React from 'react';
import { User } from 'types/user';
import { LoginGeneratedPrps } from './Login.props';

const View: React.FC<LoginGeneratedPrps> = ({ onSubmit }) => {
  return (
    <Flex flex={1} direction="column">
      <Formik<User>
        initialValues={{ id: '', name: '' }}
        onSubmit={(values) => onSubmit(values)}>
        {({ setFieldValue, isSubmitting }) => {
          return (
            <Form>
              <Input onChange={(e) => setFieldValue('name', e.target.value)} />
              <Button isLoading={isSubmitting} type="submit">
                LOGIN
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Flex>
  );
};

export default withMotion(View);
