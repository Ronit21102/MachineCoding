import React from "react";
import {useState} from "react"
const Counter = () => {

    const [count ,setCount] = useState(0);

    const inc=()=>{
        setCount(prev =>prev+1);
    }
    const dec =()=>{
        setCount(prev=>prev-1);
    }
  return (
    <>
      <h1>Counter App</h1>

      <p>Count {count}</p>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
    </>
  );
};

export default Counter;
