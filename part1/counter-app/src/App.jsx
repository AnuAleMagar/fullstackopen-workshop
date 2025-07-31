import React from "react";
import Button from "./Button";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
   function handleClick(){
    setCount(count+1)
   }
  return (
    <>
      <h1>Count is: {count}</h1>
      <div className="maindiv">
        <Button handleClick={handleClick} content="increase" />
        <Button handleClick={()=>{
            setCount(count-1)
        }} content="decrease" />
        <Button handleClick={()=>{
            setCount(0)
        }} content="reset" />
      </div>
    </>
  );
};

export default App;
