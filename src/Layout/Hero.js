import React from "react";
import classes from './Hero.module.css'
import heroImg from '../image/hero.png'
import Button from "../UI/Button";


const Hero = () => {
  return (
    <section className={classes.hero}>
        
        <div className={classes['hero-texts']}>
            <p className={classes.hungry}>Hungry?</p>
            <h1 className={classes['main-text']}>Just come to foodied & order</h1>
            <p className={classes['sub-text']}>Here you will find all the best quality and pure food. order now to satisfy your hunger pangs</p>
            <div className={classes.actions}>
                <Button className={classes.orderBtn}>Order Now</Button>
                <Button className={classes.exploreBtn}>Explore More <span>&rarr;</span></Button>
            </div>
        </div>
            <img src={heroImg} alt='Hero img' className={classes.imgHero}/>
    </section>
    );
};

export default Hero;
