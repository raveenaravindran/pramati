Rails.application.routes.draw do


 
  # get 'carts/index'
  post 'carts/create'
  get 'admins/new'
  get 'admins/show'
  get 'admins/index'
  get 'carts/add_item'
  post 'carts/add_item'
  get 'carts/reset_cart'
  post 'carts/reset_cart'
  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'

  delete '/logout',  to: 'sessions#destroy'
  post 'carts/show'
  resources :address
  resources :users
  resource :carts
  resource :cart_items  
  resources :restaurants do
    resources :dishes
  end
  root 'users#index'
  post 'address/create' => 'address#create'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
