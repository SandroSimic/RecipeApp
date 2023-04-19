import React from "react";
import { useParams } from "react-router-dom";

const RecipeItem = () => {

    const {id} = useParams()
  return <div>RecipeItem {id}</div>;
};

export default RecipeItem;
