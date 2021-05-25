import React from "react";

const Greet = ({ myPropName, id }) => {
  // console.log(props.myPropName);
  return (
    <h3>
      Hello There, {myPropName} - {id}
    </h3>
  );
};

export default Greet;
