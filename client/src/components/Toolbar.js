import React from 'react';
import { useDispatch } from 'react-redux';
//LISÄÄ LOPUT ACTIONIT
import { AddGate } from '../store/actions/gatesActions';

export default function Toolbar({AddConnection, ShowInfo, ToggleGrid, Save }) {
  const dispatch = useDispatch();

  return (
    <div className="toolbar">
      <button onClick={() => {
          //POISTA HARDKOODATUT KOORDINAATIT
          const position = { x: 50, y: 100 }; 
          console.log('AddGate payload:', { gateType: 'AND', position });
          dispatch(AddGate({ gateType: 'AND', position }));
        }}>
        Portit 
      </button>

      <button onClick={() => dispatch(AddConnection())}>
        Yhteys
      </button>

      <button onClick={() => dispatch(ShowInfo())}>
        Näytä tiedot
      </button>

      <button onClick={() => dispatch(ToggleGrid())}>
        Ruudukko
      </button>

      <button onClick={() => dispatch(Save())}>
        Tallenna ja poistu
      </button>
      
    </div>
  );
}