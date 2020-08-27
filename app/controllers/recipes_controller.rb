class RecipesController < ApplicationController
  def index
  end

  def find_recipes
    ingredient_ids = params[:ingredients].split(',').sort()
    recipes = Recipe.joins(:ingredients).where(ingredients: {id: ingredient_ids}).group('recipes.id').having('count(*) = ?', ingredient_ids.count)

    render json: recipes.map { |recipe| { name: recipe.name } }
  end
end
