import React from "react";
import classes from './responsiveNav.module.css'

const ResponsiveNav = (props) => {


  return (  
   
    <ul className={`${classes.listItems}`}>
        {props.children}
    </ul>

  
    );
};

export default ResponsiveNav;
