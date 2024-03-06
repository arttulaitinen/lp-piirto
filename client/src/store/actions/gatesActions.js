import { ADD_GATE, DELETE_GATE } from './types';

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

export const updateGatePositions = (updatedGates) => {
  return {
    type: 'UPDATE_GATE_POSITIONS',
    payload: updatedGates,
  };
};