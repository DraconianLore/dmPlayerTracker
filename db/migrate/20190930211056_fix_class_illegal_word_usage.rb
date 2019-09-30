class FixClassIllegalWordUsage < ActiveRecord::Migration[5.2]
  def change
    rename_table :classes, :pclasses
  end
end
