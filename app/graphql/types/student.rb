module Types
  class Student < GraphQL::Schema::Object
    field :id, ID, null: false
    field :first_name, String
    field :last_name, String
    field :birthdate, String
    field :students_class, StudentsClass, null: true
  end

  def students_class
    object.students_class
  end
end
