import React from "react";
import classes from './RecipesCard.module.css'


const RecipesCard = (props) => {
  return <> 
    <div className={classes.recipeItems}>
      <div className={classes.circleWrapper}>     
        <img src={props.img} alt="item 1" className={classes.circleImg}/>
      </div>   
      <div className={classes.textAndButtons}>
        <div className={classes.texts}>
          <h2>{props.title}</h2>
          <p>{props.diets}</p>
        </div>
      </div>
      <button className={classes.buttonRecipe}>Recipe</button>
    </div>
  </>;
};

export default RecipesCard;
