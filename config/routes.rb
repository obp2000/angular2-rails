Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  resources :posts
  root 'dashboard#index'
  
  resources :products, only: [:show, :update]

  namespace :api, defaults: { format: :json } do
   resources :products do
     collection do
        get "autocomplete/:term", action: "autocomplete"
      end
    end
    resources :customers, only: [:index, :show, :create, :update, :destroy] do
      collection do
        get "autocomplete/:term", action: "autocomplete"
      end
    end
    resources :orders, only: [:index, :show, :create, :update, :destroy]
    
  end
   
end
