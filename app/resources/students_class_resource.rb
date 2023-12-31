class StudentsClassResource < ApplicationResource
  self.autolink = false
  has_many :students

  attribute :teacher_first, :string
  attribute :teacher_last, :string
  attribute :room, :string
end
