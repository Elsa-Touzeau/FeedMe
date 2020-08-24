Rails.application.routes.draw do
  get 'ingredients/index'
  root to: 'recipes#index'
  get 'recipes/index'
  resources :ingredients, except: [:new, :create]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
