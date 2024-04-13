import { ADD_GATE, DELETE_GATE, ADD_INPUTGATE, ADD_OUTPUTGATE, UPDATE_GATE_POSITION, ADD_NOTGATE, CHANGE_STATUS } from './types';

export const addGate = (gateType, position) => {
  return {
      type: ADD_GATE,
      payload: { gateType, position } 
  };
};

export const addInputGate = (gateType, position) => {
  return {
      type: ADD_INPUTGATE,
      payload: { gateType, position } 
  };
};

export const addOutputGate = (gateType, position) => {
  return {
      type: ADD_OUTPUTGATE,
      payload: { gateType, position } 
  };
};

export const addNotGate = (gateType, position) => {
  return {
      type: ADD_NOTGATE,
      payload: { gateType, position } 
  };
};

export const deleteGate = (id) => {
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

export const changeStatus = (id) => { 
  return {
    type: CHANGE_STATUS,
    payload: { id }
  };
};