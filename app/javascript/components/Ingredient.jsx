import React from "react"
import IngredientButton from './IngredientButton';

const Ingredient = ({ ingredients }) => {
  return (
    <React.Fragment>
      {
        ingredients.map((ingredient, index) => (
          <IngredientButton key={index} name={ingredient.name }>

          </IngredientButton>
        ))
      }
    </React.Fragment>
  );
}

export default Ingredient
