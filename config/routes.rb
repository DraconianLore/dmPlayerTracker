Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do 
    resources :players
    resources :games
    resources :feats
    resources :races
    resources :pclasses
    resources :items
    resources :notes
    resources :spells
  end
  
  post '/register', to: 'api/users#register'
  post '/login', to: 'api/users#login'
  post '/api/joinItems', to: 'api/players#playeritems'
  get 'api/connectionStatus', to: 'api/users#connect'

  # Character endpoints
  post 'api/char/register', to: 'api/chars#register'
  post 'api/char/login', to: 'api/chars#login'
  get 'api/char/:id', to: 'api/chars#load'
end
