import { ADD_GATE, DELETE_GATE } from './types';

export const AddGate = (gateType, position) => ({
  type: ADD_GATE,
  payload: { gateType, position } 
});

export const DeleteGate = (gateId) => ({
  type: DELETE_GATE,
  payload: { gateId }
});