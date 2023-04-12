import React from "react";
import search from '../image/search.png'
import purse from '../image/purse.png'
import classes from './Navigation.module.css'
import ActionCircle from "../components/ActionCircle";

const Navigation = () => {
  return (
    <nav className={classes.navigation}>
        <h1 className={classes.logo}>FOODIE</h1>
        <ul className={classes['list-items']}>
            <li>Home</li>
            <li>Menu</li>
            <li>About Us</li>
            <li>Contact</li>
        </ul>
        <div className={classes.actions}>
            <ActionCircle className={classes.circle} src={search} alt="Search"/>
            <ActionCircle className={classes.circle} src={purse} alt="Purse"/>
            <button className={classes.btn}>Sign Up</button>
        </div>
      
    </nav>
  );
};

export default Navigation;
