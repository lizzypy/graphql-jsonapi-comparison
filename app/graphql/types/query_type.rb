# frozen_string_literal: true

module Types
  class QueryType < GraphQL::Schema::Object
    field :student, Student, "Find a student by ID" do
      argument :id, ID
    end

    field :students, [Student], 'Returns all students'

    def students
      ::Student.all
    end

    def student(id:)
      ::Student.find(id)
    end
  end
end
