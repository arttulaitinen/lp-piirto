import React from 'react';
import { useSelector } from 'react-redux'; 
import AndGate from './gates/AndGate';

const DrawingArea = () => {
  const gates = useSelector(state => state.gates); 

  const renderGate = (gate) => {
    switch (gate.type) {
      case 'AND': return <AndGate key={gate.id} />;
      default: return null; 
    }
  }

  return (
    <div className="drawing-area">
      {gates.map((gate) => (
        <div key={gate.id} style={{ position: 'absolute', left: gate.position.x, top: gate.position.y }}>
          {renderGate(gate)}
        </div>
      ))}
    </div>
  );
}

export default DrawingArea;