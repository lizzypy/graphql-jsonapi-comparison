module Types
  class StudentsClass < GraphQL::Schema::Object
    field :id, ID, null: false
    field :teacher_first, String
    field :teacher_last, String
    field :room, String
  end
end
