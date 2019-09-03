class SetDefaults < ActiveRecord::Migration[5.2]
  def change
    change_table :players do |t|
      t.remove :baseSTR
      t.remove :baseDEX
      t.remove :baseCON
      t.remove :baseINT
      t.remove :baseWIS
      t.remove :baseCHA
      t.remove :ac

      t.integer :baseSTR, default: 0
      t.integer :baseDEX, default: 0
      t.integer :baseCON, default: 0
      t.integer :baseINT, default: 0
      t.integer :baseWIS, default: 0
      t.integer :baseCHA, default: 0
      t.integer :AC, default: 10
    end
  end
end
