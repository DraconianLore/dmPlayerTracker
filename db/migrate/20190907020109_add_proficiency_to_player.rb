class AddProficiencyToPlayer < ActiveRecord::Migration[5.2]
  def change
    change_table :players do |t|
      t.integer :proficiency
    end
  end
end
