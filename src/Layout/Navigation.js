import React, { useState } from "react";
import purse from '../image/purse.png'
import classes from './Navigation.module.css'
import ActionCircle from "../components/ActionCircle";
import ResponsiveNav from "./ResponsiveNav";
import { Link } from "react-scroll";

const Navigation = () => {

  const [openNav, setOpenNav] = useState(false)

  const openNavbarHandler = () => {
    setOpenNav(!openNav)
    console.log(openNav);
  }

  return (
    <>
      {openNav && <ResponsiveNav active = {`classes.${openNav ? 'active' : ''}`}>           
            <li><Link to="home" spy={true} smooth={true} offset={50} duration={500} onClick={openNavbarHandler}>Home</Link></li>
            <li><Link to="recipe" spy={true} smooth={true} offset={50} duration={500} onClick={openNavbarHandler}>Recipe</Link></li>
            <li><Link to="aboutUs" spy={true} smooth={true} offset={50} duration={500} onClick={openNavbarHandler}>About Us</Link></li>
          </ResponsiveNav>}
        <nav className={classes.navigation}>
        <h1 className={classes.logo}>FOODIED</h1>
        <ul className={`${classes['list-items']}`}>
            <li><Link to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
            <li><Link to="recipe" spy={true} smooth={true} offset={50} duration={500}>Recipe</Link></li>
            <li><Link to="aboutUs" spy={true} smooth={true} offset={-150} duration={500}>AboutUs</Link></li>
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
