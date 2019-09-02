Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do 
    resources :players
  end
  
  post '/register', to: 'api/users#register'
  post '/login', to: 'api/users#login'

end
