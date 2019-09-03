class FixReservedWord < ActiveRecord::Migration[5.2]
  def change
    rename_column :players, :class, :classname
  end
end
