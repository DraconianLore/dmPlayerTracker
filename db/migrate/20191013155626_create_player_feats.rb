class CreatePlayerFeats < ActiveRecord::Migration[5.2]
  def change
    create_table :player_feats do |t|
      t.references :player, foreign_key: true
      t.references :feat, foreign_key: true

      t.timestamps
    end
  end
end
