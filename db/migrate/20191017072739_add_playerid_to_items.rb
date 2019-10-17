class AddPlayeridToItems < ActiveRecord::Migration[5.2]
  def change
    change_table :notes do |t|
      t.integer :player_id
    end
    change_table :items do |t|
      t.integer :player_id
    end
    
  end
end
