# frozen_string_literal: true

class FixRacesTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :races, :traits
    remove_column :races, :languages
    change_table :races do |t|
      t.text :traits, array: true, default: []
      t.text :languages, array: true, default: []
    end
  end
  end
