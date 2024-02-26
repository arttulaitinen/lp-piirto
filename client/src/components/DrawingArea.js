import React from 'react';
import { useSelector } from 'react-redux'; 
import AndGate from './gates/AndGate';

const DrawingArea = () => {
  const gates = useSelector(state => state.gates); 

  const renderGate = (gate) => {
    switch (gate.type) {
      case 'AND': return <AndGate key={gate.id} />;
      //menee defaulttiin aina jostain syystä
      default: return null; 
    }
  }

  return (
    <div className="drawing-area">
      {gates.map((gate) => (
        <div key={gate.id} style={{ 
            position: 'absolute', 
            left: gate.position?.x || 100,
            top: gate.position?.y || 100 
          }}>
          {renderGate(gate)}
        </div>
      ))}
    </div>
  );
}

export default DrawingArea;