class StudentResource < ApplicationResource
  self.autolink = false
  belongs_to :students_class
  attribute :first_name, :string
  attribute :last_name, :string
  attribute :birthdate, :string
end
