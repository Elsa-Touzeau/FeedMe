class RecipesController < ApplicationController
  def index
    @ingredient = Ingredient.first
  end
end
