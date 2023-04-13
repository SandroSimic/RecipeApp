import React from "react";
import classes from './HeroItems.module.css'


const HeroItems = (props) => {
  return (
<>     
    <div className={classes['hero-items']}>
    <div className={classes['circle-wrapper']}>     
                <img src={props.img} alt="item 1" className={classes['circle-img']}/>
        </div>   
        <div className={classes.textAndButtons}>
        <div className={classes.texts}>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
            <div className={classes.buttons}>
                <button className={classes['buttons-price']}>{props.price}</button>
                <button className={classes['buttons-buy']}>Buy Now</button>
            </div>
        </div>
    </div>
</>
      
  );
};

export default HeroItems;
