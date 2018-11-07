Rails.application.routes.draw do
  get 'welcome/index'
  get 'article/new'
  # get 'article/index'

  resources :articles
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'article#index'

 
end
