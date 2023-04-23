import React, { useEffect, useState } from "react";
import classes from '../App.module.scss'
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Recipes = () => {

  const [random, setRandom] = useState([]);




  useEffect(() => {
    const getPopular = async () =>{

      
    const check = localStorage.getItem('random')
    if(check){
      setRandom(JSON.parse(check))
    }else{ 
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
      const data = await api.json();
      setRandom(data.recipes);
    
      localStorage.setItem('random', JSON.stringify(data.recipes))
    }

 
    
    }
    getPopular()
  }, [])
 
  
  return (
  <>
  <Navbar/>
    <h3 className={classes.randomRecipe}>Popular Recipes</h3>
  <div className={classes.wrapper}>
            {random.map((recipe) => {
              return(
                <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
                <div className={classes.card} >
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title}/>
                  <div className={classes.gradient}/>
                </div>
                </Link>
              );
            })}
        </div>
  </>)
};

export default Recipes;
