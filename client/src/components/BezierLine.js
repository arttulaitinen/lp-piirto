import React, { useRef, useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { gsap } from 'gsap';
import Draggable from 'gsap/Draggable'; 
import { updateConnectionPosition } from "../store/actions/connectionsActions";

import "./BezierLine.css";

//koodin alunperin tehnyt @osublake https://codepen.io/osublake/pen/GMrExO

const BezierLine = ({ index, start: startProp, end: endProp }) => {
  const dispatch = useDispatch();
  let svgRef = useRef(null);
  let pathRef = useRef(null);
  let handle1Ref = useRef(null);
  let handle2Ref = useRef(null);

  const [start, setStart] = useState(startProp);
  const [end, setEnd] = useState(endProp);

  const handles = [handle1Ref.current, handle2Ref.current]; 

  gsap.registerPlugin(Draggable); 

  useEffect(() => {
    const updatePath = () => {  
        let handlePropsA = gsap.getProperty(handle1Ref.current);
        let handlePropsB = gsap.getProperty(handle2Ref.current);
            try { 
                let x1 = handlePropsA("x");
                let y1 = handlePropsA("y");
            
                let x4 = handlePropsB("x");
                let y4 = handlePropsB("y");
            
                let dx = Math.abs(x4 - x1) * 0.675;
            
                let x2 = x1 - dx;
                let x3 = x4 + dx;
            
                let data = `M${x1} ${y1} C ${x2} ${y1} ${x3} ${y4} ${x4} ${y4}`;
            
                pathRef.current.setAttribute("d", data);
            } catch (err) {
            } 
    };

    const updateRedux = () => {
      let handlePropsA = gsap.getProperty(handle1Ref.current);
      let handlePropsB = gsap.getProperty(handle2Ref.current);

      let newStart = { x: handlePropsA("x"), y: handlePropsA("y") };
      let newEnd = { x: handlePropsB("x"), y: handlePropsB("y") };

      console.log(index, newStart, newEnd)
      dispatch(updateConnectionPosition(index, newStart, newEnd));

      setStart(newStart);
      setEnd(newEnd);
    };

    gsap.set(handle1Ref.current, { x: start.x, y: start.y });
    gsap.set(handle2Ref.current, { x: end.x, y: end.y });

    Draggable.create([handle1Ref.current, handle2Ref.current], { 
        onDrag: updatePath,
        onRelease: updateRedux, 
    }); 

    updatePath();
    

  }, [start, end]); 



  return (
    <svg ref={svgRef}>
      <path ref={pathRef} className="path" /> 
      <circle ref={handle1Ref} className="handle" cx="0" cy="0" r="8" />
      <circle ref={handle2Ref} className="handle" cx="0" cy="0" r="8" />
    </svg>
  );
};

export default BezierLine;