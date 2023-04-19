import React from "react";
import classes from '../../App.module.scss'

const Input = React.forwardRef((props, ref) => {
  return (<div className={classes.input}>
    <input ref={ref} {...props.input}/>
  </div>);
});

export default Input;
