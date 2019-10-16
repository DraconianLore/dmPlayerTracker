class CreatePlayerItems < ActiveRecord::Migration[5.2]
  def change
    create_table :player_items do |t|
      t.references :player, foreign_key: true
      t.references :item, foreign_key: true
      t.timestamps
    end
  end
end
