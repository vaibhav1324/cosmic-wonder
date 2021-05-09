import { persist } from 'effector-storage/local/fp';
import { User } from 'types/user';

import { UserDomain } from './domain';
import { loginEvent, logoutEvent } from './events';

const initialState: Partial<User> = {};

const { store } = UserDomain;

export const UserStore = store(initialState)
  .on(loginEvent, (_state, res) => res)
  .on(logoutEvent, () => ({}))
  .thru(persist({ key: 'user-storage' }));
