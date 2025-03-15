import React from "react";

import { IoTimeOutline } from "react-icons/io5";
import { FaFire } from "react-icons/fa";

const Menu = ({ food, handleCook }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = food;

  return (
    <div className="">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img src={recipe_image} alt="Recipes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{recipe_name}</h2>
          <p>{short_description}</p>
          <div className="">
            <h3 className="text-xl">Ingredients: </h3>
            <ol>
              {ingredients.map((ingredient) => (
                <li>{ingredient}</li>
              ))}
            </ol>
          </div>
          <div className="flex gap-4 justify-between items-center">
            <div className="flex items-center gap-2">
              <IoTimeOutline />
              <p>{preparing_time}</p>
            </div>
            <div className="flex items-center gap-2">
              <FaFire />
              <p>{calories}</p>
            </div>
          </div>

          <div className="">
            <button className="btn btn-accent" onClick={() => handleCook(food)}>
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
