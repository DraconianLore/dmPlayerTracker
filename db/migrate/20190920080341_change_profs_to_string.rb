class ChangeProfsToString < ActiveRecord::Migration[5.2]
  def change
    change_table :players do |t|
      t.remove :proficiencies
      t.text :proficiencies
    end
  end
end
