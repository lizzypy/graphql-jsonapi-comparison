class AddClassReferenceToStudent < ActiveRecord::Migration[7.1]
  def change
    add_reference :students, :students_class, foreign_key: true
  end
end
