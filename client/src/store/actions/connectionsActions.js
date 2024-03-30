import { ADD_CONNECTION, DELETE_CONNECTION} from './types';

export const addConnection = (fromGateId, toGateId, toInputIndex) => ({
  type: ADD_CONNECTION,
  payload: { fromGateId, toGateId, toInputIndex }
});

export const deleteConnection = (fromGateId, toGateId) => ({
  type: DELETE_CONNECTION,
  payload: { fromGateId, toGateId }
});