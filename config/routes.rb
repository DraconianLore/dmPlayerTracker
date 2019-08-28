Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do # /api/data
    resources :players
  end
  
  post '/register', to: 'api/users#register'
  post '/login', to: 'api/users#login'
  get 'test', to: 'api/users#test'

end
