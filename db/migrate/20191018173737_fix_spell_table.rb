class FixSpellTable < ActiveRecord::Migration[5.2]
  def change
    change_column :spells, :range, :string
    remove_column :players, :notes
    remove_column :players, :items
    remove_column :players, :spells
    remove_column :players, :abilities
  end
end
