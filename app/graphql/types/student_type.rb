module Types
  class StudentType < GraphQL::Schema::Object
    field :id, ID, null: false
    field :first_name, String
    field :last_name, String
    field :birthdate, String
  end
end
