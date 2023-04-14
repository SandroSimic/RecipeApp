import React from "react";
import classes from './SubText.module.css'

const SubText = (props) => {
  return <p className={classes['sub-text']}>{props.text}</p>;
};

export default SubText;
