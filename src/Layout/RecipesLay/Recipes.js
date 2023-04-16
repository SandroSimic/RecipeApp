import React, { useEffect, useState } from "react";
import classes from './Recipes.module.css'
import Heading1 from "../../UI/Heading1";
import SubText from '../../UI/SubText'
import RecipesCard from "../../components/RecipesCard/RecipesCard";

const Recipes = () => {

    const [specialRecipe, setSpecialRecipe] = useState([])

    useEffect(() =>{
        getRecipe();
    },[])
    
    const getRecipe = async () =>{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=3`)
        const data = await api.json();
        console.log(data)
        setSpecialRecipe(data.recipes)
    }

  return (<section className={classes.specialRecipes} id="recipe">
    <Heading1 text='Special Recipes!'/>
    <SubText text="Why not tryout some of our free recipes?"/>
    <div className={classes.recipe}>
    {specialRecipe.map(recipe => {
        return(
            <RecipesCard img={recipe.image} title={recipe.title} diets={recipe.diets}/>
        )
    })}
    </div>
  </section>);
};

export default Recipes;
