FactoryBot.define do
  factory :students_class do
    teacher_first { Faker::Name.first_name }
    teacher_last { Faker::Name.last_name }
    room { Faker::Alphanumeric.alphanumeric }
  end
end
