class AddPortraits < ActiveRecord::Migration[5.2]
  def change
    change_table :players do |t|
      t.string :portrait, default: 'https://picsum.photos/300'
    end
  end
end
