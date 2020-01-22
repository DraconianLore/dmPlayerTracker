class ChangePuserToChar < ActiveRecord::Migration[5.2]
  def change
    rename_table :pusers, :chars
  end
end
