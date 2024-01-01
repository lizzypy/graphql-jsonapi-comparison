# frozen_string_literal: true

module Types
  class QueryType < GraphQL::Schema::Object
    field :student, Student, "Find a student by ID" do
      argument :id, ID
    end

    field :students, [Student], 'Returns all students'

    field :students_classes, [StudentsClass], 'Returns all classes'

    def students_classes
      ::StudentsClass.all
    end

    def students_class(id:)
      ::StudentsClass.find(id)
    end

    def students
      ::Student.all
    end

    def student(id:)
      ::Student.find(id)
    end
  end
end
