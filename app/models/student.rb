class Student < ApplicationRecord
  belongs_to :students_class, optional: true
end
