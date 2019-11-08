class AddPlayerToPlayersheet < ActiveRecord::Migration[5.2]
  def change
    change_table :pusers do |t|
      t.integer :player_id
    end
  end
end
