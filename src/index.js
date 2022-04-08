import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function Addition() {
  const [Val1, setVal1] = useState(0);
  const [Val2, setVal2] = useState(0);
  const [Sum, setSum] = useState();

  return (
    <div>
      <input
        type="text"
        onInput={(e) => {
          setVal1(Number(e.target.value));
        }}
      />
      &nbsp; 
      +
      &nbsp; 
      <input
        type="text"
        onInput={(e) => {
          setVal2(Number(e.target.value));
        }}
      />
      <button
        onClick={() => {
          setSum(Val1 + Val2);
        }}
      >
        Calculer!
      </button>
      &nbsp; 

      =
      &nbsp; 

      <label>{Sum}</label>
      
    </div>
  );
}

createRoot(document.getElementById("root")).render(<Addition />);
