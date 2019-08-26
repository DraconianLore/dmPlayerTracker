class BuildTables < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_digest
    end
    create_table :players do |t|
      t.string :playerName
      t.string :charName
      t.integer :user_id
      t.string :class
      t.string :race
      t.integer :maxHP
      t.integer :ac
      t.integer :baseSTR
      t.integer :baseDEX
      t.integer :baseCON
      t.integer :baseINT
      t.integer :baseWIS
      t.integer :baseCHA
    end
  end
end
