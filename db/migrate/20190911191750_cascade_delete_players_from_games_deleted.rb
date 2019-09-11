class CascadeDeletePlayersFromGamesDeleted < ActiveRecord::Migration[5.2]
  def change
    add_foreign_key :players, :games, on_delete: :cascade
  end
end
