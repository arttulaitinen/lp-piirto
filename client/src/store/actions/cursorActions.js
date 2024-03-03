import { SET_CURSOR_POSITION } from './types';

export const setCursorPosition = (position) => ({
    type: SET_CURSOR_POSITION,
    payload: { position } 
  });