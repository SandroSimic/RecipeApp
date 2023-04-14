import React, { useState } from "react";
import purse from '../image/purse.png'
import classes from './Navigation.module.css'
import ActionCircle from "../components/ActionCircle";
import ResponsiveNav from "./ResponsiveNav";

const Navigation = () => {

  const [openNav, setOpenNav] = useState(false)

  const openNavbarHandler = () => {
    setOpenNav(!openNav)
    console.log(openNav);
  }

  return (
    <>
      {openNav && <ResponsiveNav active = 'classes.active'>           <li>Home</li>
            <li>Recipe</li>
            <li>About Us</li>
          </ResponsiveNav>}
        <nav className={classes.navigation}>
        <h1 className={classes.logo}>FOODIED</h1>
        <ul className={`${classes['list-items']}`}>
            <li>Home</li>
            <li>Recipe</li>
            <li>About Us</li>
        </ul>
        <div className={classes.actions}>
            <ActionCircle className={classes.circle} count={classes.count} src={purse} alt="Purse"/>
        </div>
        <div className={`${classes.hamburger} ${openNav ? classes.active : ''}`} onClick={openNavbarHandler}>
          <div className={classes['line-1']}></div>
          <div className={classes['line-2']}></div>
          <div className={classes['line-3']}></div>
        </div>
    </nav>
       
    </>
  );
};

export default Navigation;
