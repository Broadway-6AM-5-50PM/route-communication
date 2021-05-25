import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  inline: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

const FormItem = (props) => {
  const inlineValue = props.inline;
  console.log(inlineValue);
  const classes = useStyles();
  return (
    <div className={inlineValue && classes.inline}>
      <p>{props.label}</p>
      <input type="text" />
    </div>
  );
};

export default FormItem;
