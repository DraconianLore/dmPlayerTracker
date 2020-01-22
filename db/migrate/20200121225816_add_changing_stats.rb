class AddChangingStats < ActiveRecord::Migration[5.2]
  def change
    change_table :players do |t|
      t.integer :currentHP
      t.integer :tempHP
      t.text :spellslots, array: true, default: []
      t.text :special, array: true, default: []
    end
    change_table :spells do |t|
      t.boolean :prepared, default: true
    end
    create_table :pnotes do |t|
      t.string :name
      t.text :description
      t.integer :player_id
      t.timestamps
    end
  end
end
