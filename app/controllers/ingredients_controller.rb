class IngredientsController < ApplicationController
  def index
    search = params[:search]
    if search
      @ingredients = Ingredient.where('name ILIKE :ingredient', ingredient: "%#{search}%")
      respond_to do |format|
        format.json do
          render json: @ingredients.map { |ingredient| { label: ingredient.name, selectedValue: ingredient.id } }
        end
      end
    end
  end
end
