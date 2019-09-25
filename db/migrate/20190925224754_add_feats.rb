class AddFeats < ActiveRecord::Migration[5.2]
  def change
    create_table :feats do |t|
      t.string :name
      t.text :description
      t.string :search
    end
  end
end
