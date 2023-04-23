import React, { useState } from "react";
import { json, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import classes from '../App.module.scss'


const RecipeItem = () => {

  const data = useLoaderData()

  const [activeTab, setActiveTab] = useState(false)

  return (
    <>
    <Navbar/>
      <div className={classes.recipeItems}>
        <img src={data.image} alt={data.title} className={classes.recipeImage}/>
        <div className={classes.recipeData}>
          <h1 className={classes.title}>{data.title}</h1>
          {activeTab && <h5 dangerouslySetInnerHTML={{__html: data.instructions}}></h5>}
          {!activeTab && <ul className={classes.ingredients}>
          {data.extendedIngredients.map((ingredient)=> (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
          </ul>}
        <div className={classes.actions}>
          <button className={classes.btnIngredients} onClick={()=>setActiveTab(false)}>Ingredients</button>
          <button className={classes.btnInstructions} onClick={()=>setActiveTab(true)}>instructions</button>
        </div>
        </div>
       
      </div>
    </>

  )
};

export default RecipeItem;

export async function loader({request, params}) {
  const id = params.id;

  const api = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
  
  if(!api.ok)
  {
    throw json({message: 'Could not fetch details for selected event.'}, {
      status: 500})
  }else {
    return api;
  }
}

