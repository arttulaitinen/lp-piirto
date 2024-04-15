import { SET_USER_STATE } from './types';

export const setUserState = (user) => {
  return {
    type: SET_USER_STATE,
    payload: user,
  };
};
