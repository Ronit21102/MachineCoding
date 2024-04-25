import React from "react";
import { useState, useMemo } from "react";
import "./Calulator.css";

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const arr = useMemo(() => {
    return [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "C", 0, "=", "/"];
  }, []);

  const calculate = (e) => {
    const val = e.target.name;
    if (val === "C") {
      setExpression("");
      setResult(0);
    } else if (val === "=") {
    
      
        if (expression === "") {
          setResult("Error"); 
        } else {
          setResult(eval(expression)); 
        }
    
    } else {
      setExpression((prev) => prev + val);
    }
  };
  return (
    <div className="calci">
      <h1 className="heading">React Calculator</h1>

      <input value={expression} />
      <p className="result">{result}</p>
      <div className="buttons">
        {arr.map((val, ind) => (
          <button key={ind} name={val} onClick={calculate}>
            {val}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
