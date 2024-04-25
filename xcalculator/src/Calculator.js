import React from "react";
import { useState, useMemo } from "react";
import "./Calulator.css";

const Calculator = () => {
  const [count, setCount] = useState("");
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState(0);
  const arr = useMemo(() => {
    return [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "C", 0, "=", "/"];
  }, []);

  const calculate = (e) => {
    console.log(e.target.name);
    const val = e.target.name;
    if (val === "C") {
      setExpression("");
      setResult(0);
    } else if (val === "=") {
      try {
        setResult(eval(expression));
      } catch (error) {
        setResult("Error");
      }
    } else {
      setCount((prev) => prev + val);
      setExpression((prev) => prev + val);
    }
  };
  return (
    <div className="calci">
      <h1 className="heading">React Calculator</h1>

      <input value={count} />
      <p className="result">{result !== 0 ? result : ""}</p>
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
