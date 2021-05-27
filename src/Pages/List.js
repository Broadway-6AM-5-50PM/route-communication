import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import CardComponent from "../components/CardComponent";
import InputComponent from "../components/InputComponent";

const useStyles = createUseStyles({
  bodyWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  formWrapper: {},
});

const List = () => {
  let defaultPeoples = [
    {
      name: "Aashish",
      dob: "2050-08-21",
      memo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Ram",
      dob: "2050-08-21",
      memo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Shyam",
      dob: "2050-08-21",
      memo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  const classes = useStyles();
  const [peoples, setPeoples] = useState(defaultPeoples);
  const initialData = {
    name: "",
    dob: "",
    memo: "",
  };

  const [userData, setUserData] = useState(initialData);

  const handleChange = (event) => {
    event.persist();
    // console.log(event.target.value);
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.persist();
    setPeoples([...peoples, userData]);
  };

  return (
    <div>
      <h3>Welcome to list</h3>
      <div className={classes.bodyWrapper}>
        {peoples.map((people) => (
          <CardComponent data={people} />
        ))}
      </div>
      <div className={classes.formWrapper}>
        <InputComponent
          handleChange={handleChange}
          label="Full Name"
          id="fullName"
          name="name"
          value={userData.name}
        />
        <InputComponent
          handleChange={handleChange}
          label="DOB"
          id="dob"
          name="dob"
          value={userData.dob}
        />
        <InputComponent
          handleChange={handleChange}
          label="Memo"
          id="memo"
          name="memo"
          value={userData.memo}
        />
        <button onClick={handleSubmit}>Add Person</button>
      </div>
    </div>
  );
};

export default List;
