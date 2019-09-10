class SetDefaultStats < ActiveRecord::Migration[5.2]
  def change
    drop_table :players
    create_table :players do |t|
      t.string "playerName", default: 'Player'
      t.string "charName", default: 'Character'
      t.integer "game_id"
      t.string "classname", default: 'Class'
      t.string "race", default: 'Race'
      t.string "hitDie", default: 'd6'
      t.text "proficiencies", default: [], array: true
      t.text "spells", default: [], array: true
      t.text "abilities", default: [], array: true
      t.string "background", default: 'Background'
      t.integer "baseSTR", default: 10
      t.integer "baseDEX", default: 10
      t.integer "baseCON", default: 10
      t.integer "baseINT", default: 10
      t.integer "baseWIS", default: 10
      t.integer "baseCHA", default: 10
      t.integer "AC", default: 10
      t.integer "saveDC", default: 0
      t.integer "maxHP", default: 0
      t.integer "speed", default: 25
      t.integer "level", default: 1
      t.text "notes", default: [], array: true
      t.text "items", default: [], array: true
      t.integer "proficiency", default: 2
    end
  end
end
