import React, { useCallback } from 'react';
import { User } from 'types/user';
import { LoginProps } from './Login.props';
import View from './Login.view';
import { loginEvent } from 'effector/user/events';

const Container: React.FC<LoginProps> = (props) => {
  const onSubmit = useCallback((values: User) => {
    const id = String(
      Math.random() * Math.random() +
        'asdasdasdasdas' +
        Math.random() * Math.random(),
    ).toString();
    setTimeout(() => {
      loginEvent({ ...values, id });
    }, 3000);
  }, []);

  return View({
    onSubmit,
  });
};

export default Container;
