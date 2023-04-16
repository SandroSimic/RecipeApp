import React from "react";
import classes from './AboutUsCard.module.css'

const AboutUsCard = (props) => {
  return (
    <section className={classes.aboutUs}>
        <div className={classes['aboutUs-wrapper']}>
            <img src={props.image} alt={props.image}/>
            <h2>{props.title}</h2>
            <p>{props.description}</p>    
        </div>
</section>
  );
};

export default AboutUsCard;
