import React, { useState } from "react";
import Greet from "./Greet";

const Counter = (props) => {
  console.log("================", props);
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);
  // var name = "Aashish";
  const handleButtonClick = () => {
    setCount(count + 1);
  };
  const toggleCount = () => {
    setCount(0);
  };
  const data = props.match.params.name;

  const toggleView = () => {
    // if (toggle == true){
    //   setToggle(false)
    // } else {
    //   setToggle(true)
    // }
    setToggle(!toggle);
  };
  return (
    <>
      <Greet myPropName={data} id="myID" />
      <button onClick={toggleView}>Toggle View</button>
      {console.log("re-rendered the page with count = ", count, toggle)}
      {toggle && <h3>Clicked {count} times on the button below.</h3>}

      <button onClick={handleButtonClick}>Click Me!</button>
      <button onClick={toggleCount}>Toggle Me!</button>
    </>
  );
};

export default Counter;
