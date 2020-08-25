import React, { useState, useEffect } from "react";
import AsyncSelect from "react-select/async";
import Recipe from "./Recipe"

const AutoCompleteSelect= () => {
  const [focus, setFocus] = useState(false);
  const [multiValue, setMultiValue] = useState(null);
  const [recipes, setRecipes] = useState(null);
  const [hasError, setError] = useState(false);

  const onFocus = () => setFocus(true)
  const onBlur = () => setFocus(false)

  const loadOptions = (inputValue) => {
    const url = `/ingredients?format=json&search=${inputValue}`;
    return fetch(url, { method: "GET" }).then(data => data.json())
  };

  const handleMultiChange = (option) => {
    setMultiValue(option);
  }

  useEffect(() => {
    findRecipe();
  }, [multiValue]);

  const findRecipe = async () => {
    if (multiValue) {
      setError(false);
      const ingredientsId = multiValue.map(a => a.selectedValue)
      console.log(ingredientsId);
      const url = `/recipes/find_recipes?ingredients=${ingredientsId}`;
      const response = await fetch(url);
      if (response.ok) {
        setRecipes(await response.json());
      } else {
        setError(true);
      }
      return [hasError, recipes];
    } else {
      setRecipes(null)
    }
  };

  return (
    <React.Fragment>
      <AsyncSelect
        name="Ingrédients"
        placeholder="Tapez vos ingrédients"
        value={ multiValue }
        loadOptions={loadOptions}
        onFocus={onFocus}
        isMulti={true}
        onBlur={onBlur}
        onChange={handleMultiChange}
        blurInputOnSelect={true}
        getOptionValue={(option) => option["selectedValue"]}
      />
      {
        recipes && (
            recipes.map((recipe, index) => (
              <div key={index}>
                { recipe.name }
              </div>
            )
          )
        )
      }
    </React.Fragment>
  );
}

export default AutoCompleteSelect;
