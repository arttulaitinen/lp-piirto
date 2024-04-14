import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Draggable from 'gsap/Draggable'; 

import "./BezierLine.css";

//koodin alunperin tehnyt @osublake https://codepen.io/osublake/pen/GMrExO

const BezierLine = ({ start, end }) => {
  let svgRef = useRef(null);
  let path = null;
  let handle1Ref = useRef(null);
  let handle2Ref = useRef(null);

  const handles = [handle1Ref.current, handle2Ref.current]; 

  gsap.registerPlugin(Draggable); 

  useEffect(() => {
    let handles = document.querySelectorAll(".handle");
    let path = document.querySelector(".path");

    const updatePath = () => {  
        let handlePropsA = gsap.getProperty(handles[0]);
        let handlePropsB = gsap.getProperty(handles[1]);
            try { 
                let x1 = handlePropsA("x");
                let y1 = handlePropsA("y");
            
                let x4 = handlePropsB("x");
                let y4 = handlePropsB("y");
            
                let dx = Math.abs(x4 - x1) * 0.675;
            
                let x2 = x1 - dx;
                let x3 = x4 + dx;
            
                let data = `M${x1} ${y1} C ${x2} ${y1} ${x3} ${y4} ${x4} ${y4}`;
            
                path.setAttribute("d", data);
            } catch (err) {
            } 
  };

    gsap.set(handles[0], { x: start.x, y: start.y });
    gsap.set(handles[1], { x: end.x, y: end.y });

    Draggable.create(handles, { 
        onDrag: updatePath
    }); 

    updatePath();

  }, [start, end]); 



  return (
    <svg ref={svgRef}>
      <path className="path" />
      <circle ref={handle1Ref} className="handle" cx="0" cy="0" r="8" />
      <circle ref={handle2Ref} className="handle" cx="0" cy="0" r="8" />
    </svg>
  );
};

export default BezierLine;