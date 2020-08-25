class RecipesController < ApplicationController
  def index
  end

  def find_recipes
    recipes = Recipe.joins(:ingredients).where('ingredients.id IN (?)', params[:ingredients].split(','))

    render json: recipes.map { |recipe| { name: recipe.name } }
  end
end
