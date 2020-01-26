class FixChat < ActiveRecord::Migration[5.2]
  def change
    change_table :chats do |t|
      t.string :title
    end
  end
end
