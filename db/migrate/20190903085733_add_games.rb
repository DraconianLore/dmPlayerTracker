class AddGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :name
      t.integer :user_id
    end
    rename_column :players, :user_id, :game_id
  end
end
