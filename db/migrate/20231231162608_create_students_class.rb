class CreateStudentsClass < ActiveRecord::Migration[7.1]
  def change
    create_table :students_classes do |t|
      t.string :teacher_first
      t.string :teacher_last
      t.string :room
      t.timestamps
    end
  end
end
