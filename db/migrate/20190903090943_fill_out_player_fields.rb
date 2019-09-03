class FillOutPlayerFields < ActiveRecord::Migration[5.2]
  def change
    change_table :players do |t|
      t.integer :level
      t.string :hitDie
      t.integer :speed
      t.integer :saveDC
      t.text :proficiencies, array: true, default: []
      t.text :spells, array: true, default: []
      t.text :abilities, array: true, default: []
      t.string :background
      t.text :personalityTraits
      t.text :ideals
      t.text :bonds
      t.text :flaws
      t.text :notes
    end
  end
end
