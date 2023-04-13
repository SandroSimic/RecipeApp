import React from "react";
import classes from './responsiveNav.module.css'

const ResponsiveNav = (props) => {


  return (  
   
      <ul className={`${classes.listItems}`}>
        <li>Home</li>
        <li>Menu</li>
        <li>About Us</li>
        <li>Contact</li>
    </ul>

  
    );
};

export default ResponsiveNav;
