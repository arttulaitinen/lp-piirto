import { ADD_CONNECTION, DELETE_CONNECTION, UPDATE_CONNECTION_POSITION } from './types';

export const addConnection = (start, end) => ({
  type: ADD_CONNECTION,
  payload: { start, end }
});

export const deleteConnection = (id) => ({
  type: DELETE_CONNECTION,
  payload: { id }
});

export const updateConnectionPosition = (index, start, end) => {
  return {
    type: UPDATE_CONNECTION_POSITION,
    payload: { index, start, end } 
  };
};