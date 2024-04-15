import { ADD_CONNECTION, DELETE_CONNECTION, UPDATE_CONNECTION_POSITION } from './types';

export const addConnection = (fromGateId, toGateId, startPos, endPos) => ({
  type: ADD_CONNECTION,
  payload: { fromGateId, toGateId, startPos, endPos }
});

export const deleteConnection = (fromGateId, toGateId) => ({
  type: DELETE_CONNECTION,
  payload: { fromGateId, toGateId }
});

export const updateConnectionPosition = (index, start, end) => {
  return {
    type: UPDATE_CONNECTION_POSITION,
    payload: { index, start, end } 
  };
};