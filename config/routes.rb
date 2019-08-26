Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do # /api/data
    resources :players
  end
  get '/login', to: 'sessions#create'
  get '/logout', to: 'sessions#logout'
  get '/signup', to: 'registrations#create'

end
