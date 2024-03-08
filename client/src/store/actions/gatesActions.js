import { ADD_GATE, DELETE_GATE, UPDATE_GATE_POSITION } from './types';

export const AddGate = (gateType, position) => {
  return {
      type: ADD_GATE,
      payload: { gateType, position } 
  };
};

export const DeleteGate = (gateId) => {
  return {
      type: DELETE_GATE,
      payload: { gateId }
  };
};

export const updateGatePosition = (gateId, position) => {
  return {
    type: UPDATE_GATE_POSITION,
    payload: { gateId, position } 
  };
};