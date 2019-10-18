class SetupSpells < ActiveRecord::Migration[5.2]
  def change
    change_table :spells do |t|
      t.string :name
      t.text :description
      t.integer :range
      t.string :components
      t.boolean :ritual
      t.boolean :concentration
      t.string :duration
      t.string :casting_time
      t.string :level
      t.string :school
      t.integer :player_id
    end
  end
end
