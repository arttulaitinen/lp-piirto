import { ADD_CONNECTION, DELETE_CONNECTION} from './types';

export const addConnection = (fromGateId, toGateId, startPos, endPos) => ({
  type: ADD_CONNECTION,
  payload: { fromGateId, toGateId, startPos, endPos }
});

export const deleteConnection = (fromGateId, toGateId) => ({
  type: DELETE_CONNECTION,
  payload: { fromGateId, toGateId }
});