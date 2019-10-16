class CreatePlayerNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :player_notes do |t|
      t.references :player, foreign_key: true
      t.references :note, foreign_key: true
      t.timestamps
    end
  end
end
