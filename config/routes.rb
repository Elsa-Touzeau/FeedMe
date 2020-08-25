Rails.application.routes.draw do
  get 'ingredients/index'
  root to: 'recipes#index'
  get 'recipes/index'
  get 'recipes/find_recipes'       => 'recipes#find_recipes'

  resources :ingredients, except: [:new, :create]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
