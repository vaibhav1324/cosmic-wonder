import { RouteComponentProps } from 'react-router';
import { User } from 'types/user';

type Params = {};

export type LoginProps = RouteComponentProps<Params>;

export type LoginGeneratedPrps = {
  onSubmit: (values: User) => void;
};
