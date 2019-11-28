class AddNpcs < ActiveRecord::Migration[5.2]
  def change
    create_table :npc do |t|
      t.string "playerName", default: "NPC"
      t.string "charName", default: "Character"
      t.integer "game_id"
      t.string "classname", default: "Class"
      t.string "race", default: "Race"
      t.string "hitDie", default: "d6"
      t.string "background", default: "Background"
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
      t.integer "proficiency", default: 2
      t.string "portrait", default: "https://picsum.photos/300"
      t.text "proficiencies"
    end
  end
end
