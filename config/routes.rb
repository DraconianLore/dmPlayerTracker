Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do 
    resources :players
    resources :games
    resources :feats
    resources :races
    resources :pclasses
  end
  
  post '/register', to: 'api/users#register'
  post '/login', to: 'api/users#login'
  post '/api/joinItems', to: 'api/players#playeritems'
  get '/api/loadItems', to: 'api/players#loaditems'

end
