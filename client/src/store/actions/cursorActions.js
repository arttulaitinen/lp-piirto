import { SET_CURSOR_POSITION, SET_HOVERED_ELEMENT } from './types';

export const setCursorPosition = (position) => {
  return {
      type: SET_CURSOR_POSITION,
      payload: { position } 
  };
};

export const setHoveredElement = (element) => ({
  type: 'SET_HOVERED_ELEMENT',
  payload: element
});