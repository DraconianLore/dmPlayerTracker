class CreateSpells < ActiveRecord::Migration[5.2]
  def change
    create_table :spells do |t|

      t.timestamps
    end
  end
end
