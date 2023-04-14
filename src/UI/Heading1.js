import React from "react";
import classes from './Heading1.module.css'

const Heading1 = (props) => {
  return <h1 className={classes['heading-one']}>{props.text}</h1>;
};

export default Heading1;
