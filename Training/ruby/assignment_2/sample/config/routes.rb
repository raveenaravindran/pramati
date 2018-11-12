Rails.application.routes.draw do


  get 'admins/new'
  get 'admins/show'
  get 'admins/index'
  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'

  delete '/logout',  to: 'sessions#destroy'
 
  resources :address
  resources :users
  resources :restaurants do
    resources :dishes
    # post 'restaurants/new' => 'restaurants#new'
  end
  root 'users#index'
  post 'address/create' => 'address#create'
  # get '/button', to: 'dishes#new', as: 'button'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
