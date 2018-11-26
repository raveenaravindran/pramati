Rails.application.routes.draw do

  post 'carts/create'
  get 'carts/add_item'
  post 'carts/add_item'

  get 'carts/reset_cart'
  post 'carts/reset_cart'
  post 'carts/show'

  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'

  
  resources :address
  resources :users
  resources :admins
  resource :carts
  resource :cart_items  
  resources :restaurants do
    resources :dishes
  end

  root 'users#index'
  post 'address/create' => 'address#create'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
