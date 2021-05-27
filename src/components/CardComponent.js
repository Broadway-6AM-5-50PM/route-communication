import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  cardWrapper: {
    maxWidth: 180,
    boxShadow: "1px 1px 13px #00000038",
    padding: 20,
    margin: 10,
  },
  dob: {},
  memo: { textAlign: "justify" },
});

const CardComponent = (props) => {
  const classes = useStyles();
  const people = props.data;
  return (
    <div className={classes.cardWrapper}>
      <h4>{people.name}</h4>
      <p className={classes.dob}>{people.dob} </p>
      <p className={classes.memo}>{people.memo}</p>
    </div>
  );
};

export default CardComponent;
