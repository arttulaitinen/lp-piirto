import { ADD_GATE, DELETE_GATE, UPDATE_GATE_POSITION } from './types';

export const AddGate = (gateType, position) => {
  return {
      type: ADD_GATE,
      payload: { gateType, position } 
  };
};

export const DeleteGate = (id) => {
  return {
      type: DELETE_GATE,
      payload: { id }
  };
};

export const updateGatePosition = (id, gateType, position) => {
  return {
    type: UPDATE_GATE_POSITION,
    payload: { id, gateType, position } 
  };
};