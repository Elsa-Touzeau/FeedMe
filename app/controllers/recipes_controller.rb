class RecipesController < ApplicationController
  def index
    @ingredients = Ingredient.all
  end
end
