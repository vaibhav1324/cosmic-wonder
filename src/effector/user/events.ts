import { User } from 'types/user';
import { UserDomain } from './domain';

export const loginEvent = UserDomain.createEvent<User>();
export const logoutEvent = UserDomain.createEvent();
