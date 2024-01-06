Rails.application.routes.draw do
  post "/graphql", to: "graphql#execute"

  get "up" => "rails/health#show", as: :rails_health_check

  root 'home#index'

  scope path: ApplicationResource.endpoint_namespace, defaults: { format: :jsonapi } do
    resources :students
  end

  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/students"
  end

end
