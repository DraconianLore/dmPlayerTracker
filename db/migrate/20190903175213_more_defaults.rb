class MoreDefaults < ActiveRecord::Migration[5.2]
  def change
    change_table :players do |t|
      t.remove :saveDC
      t.remove :maxHP
      t.remove :speed
      t.remove :level

      t.integer :saveDC, default: 0
      t.integer :maxHP, default: 0
      t.integer :speed, default: 25
      t.integer :level, default: 1
      
    end
  end
end
