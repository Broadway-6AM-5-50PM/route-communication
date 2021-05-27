import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  formItem: {},
});

const InputComponent = (props) => {
  const classes = useStyles();
  const { name, id, label, handleChange, value } = props;
  return (
    <div className={classes.formItem}>
      <label>{label} :</label>
      <input
        value={value}
        onChange={handleChange}
        name={name}
        id={id}
        type="text"
      />
    </div>
  );
};

export default InputComponent;
