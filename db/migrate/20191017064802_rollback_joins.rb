class RollbackJoins < ActiveRecord::Migration[5.2]
  def change
    drop_table :player_notes
    drop_table :player_spells
    drop_table :player_items
  end
end
