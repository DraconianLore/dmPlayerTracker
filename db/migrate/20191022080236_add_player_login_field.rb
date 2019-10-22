class AddPlayerLoginField < ActiveRecord::Migration[5.2]
  def change
    change_table :players do |t|
      t.string :playerUID
    end
  end
end
