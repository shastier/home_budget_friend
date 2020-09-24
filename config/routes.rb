Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "static_pages#home"

  # Categories route: /api/v1/categories
  namespace :api do
    namespace :v1 do
      resources :categories
    end
  end

    # Expenses route: /api/v1/expenses
    namespace :api do
      namespace :v1 do
        resources :expenses
      end
    end

end
