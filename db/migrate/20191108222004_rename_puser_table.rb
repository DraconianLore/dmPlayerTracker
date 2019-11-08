class RenamePuserTable < ActiveRecord::Migration[5.2]
  def change
    rename_table :puser, :pusers
  end
end
