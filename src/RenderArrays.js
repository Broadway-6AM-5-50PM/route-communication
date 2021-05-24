import React, { useState } from "react";

const RenderArrays = () => {
  const [element, setElement] = useState("");
  const myConstArray = ["First Element", "Second Element", "Third Element"];

  const [myArray, setMyArray] = useState(myConstArray);

  const handleInputChange = (event) => {
    setElement(event.target.value);
  };

  const handleButtonClick = (event) => {
    setMyArray([...myArray, element]);
  };
  return (
    <div>
      {console.log("value of array", myArray)}
      <ul>
        {myArray.map((arrayElement) => (
          <li>{arrayElement}</li>
        ))}
      </ul>
      <div>
        <input
          value={element}
          name="textToAdd"
          id="textToAdd"
          onChange={handleInputChange}
          type="text"
        />
        <button onClick={handleButtonClick}>Add To Array</button>
      </div>
    </div>
  );
};

export default RenderArrays;
