class EditPlayerStats < ActiveRecord::Migration[5.2]
    def change
      change_table :players do |t|
        t.remove :ideals
        t.remove :personalityTraits
        t.remove :bonds
        t.remove :flaws
        t.remove :notes
  
        t.text :notes, default: [], array: true
        t.text :items, default: [], array: true
        

      end
    end
  end
  