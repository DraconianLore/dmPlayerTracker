# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_09_30_211056) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "feats", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "search"
  end

  create_table "games", force: :cascade do |t|
    t.string "name"
    t.integer "user_id"
  end

  create_table "pclasses", force: :cascade do |t|
    t.string "name"
    t.integer "hit_die"
    t.text "itemProfs", default: [], array: true
    t.text "saving_throws", default: [], array: true
    t.text "level1", default: [], array: true
    t.text "level2", default: [], array: true
    t.text "level3", default: [], array: true
    t.text "level4", default: [], array: true
    t.text "level5", default: [], array: true
    t.text "level6", default: [], array: true
    t.text "level7", default: [], array: true
    t.text "level8", default: [], array: true
    t.text "level9", default: [], array: true
    t.text "level10", default: [], array: true
    t.text "level11", default: [], array: true
    t.text "level12", default: [], array: true
    t.text "level13", default: [], array: true
    t.text "level14", default: [], array: true
    t.text "level15", default: [], array: true
    t.text "level16", default: [], array: true
    t.text "level17", default: [], array: true
    t.text "level18", default: [], array: true
    t.text "level19", default: [], array: true
    t.text "level20", default: [], array: true
  end

  create_table "players", force: :cascade do |t|
    t.string "playerName", default: "Player"
    t.string "charName", default: "Character"
    t.integer "game_id"
    t.string "classname", default: "Class"
    t.string "race", default: "Race"
    t.string "hitDie", default: "d6"
    t.text "spells", default: [], array: true
    t.text "abilities", default: [], array: true
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
    t.text "notes", default: [], array: true
    t.text "items", default: [], array: true
    t.integer "proficiency", default: 2
    t.string "portrait", default: "https://picsum.photos/300"
    t.text "proficiencies"
  end

  create_table "races", force: :cascade do |t|
    t.string "name"
    t.integer "speed"
    t.text "traits", default: [], array: true
    t.text "languages", default: [], array: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "players", "games", on_delete: :cascade
end
