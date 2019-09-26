class AddRacesTable < ActiveRecord::Migration[5.2]
    def change
      create_table :races do |t|
        t.string :name
        t.text :traits
        t.text :languages
        t.integer :speed
      end
    end
  end
  