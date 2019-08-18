Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'post_images#index'

  resources :post_images, only: [:new, :create, :index, :show] do
  	resource :post_comments, only: [:create, :destroy]
  	resource :post_comments, only: [:create, :destroy]
  end
end
