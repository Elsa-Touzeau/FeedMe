class RecipesController < ApplicationController
  def index
  end

  def find_recipes
    ingredients = find_recipes_params[:ingredients].sort()
    @recipes = Recipe.where(ingredient_ids: ingredients)
    respond_to do |format|
      format.json do
        render json: @recipes.map { |recipe| { name: recipe.name } }
      end
    end
  end

  private

  def find_recipes_params
    params.permit(:ingredients)
  end
end
