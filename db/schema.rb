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

ActiveRecord::Schema.define(version: 2019_09_06_220931) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "games", force: :cascade do |t|
    t.string "name"
    t.integer "user_id"
  end

  create_table "players", force: :cascade do |t|
    t.string "playerName"
    t.string "charName"
    t.integer "game_id"
    t.string "classname"
    t.string "race"
    t.string "hitDie"
    t.text "proficiencies", default: [], array: true
    t.text "spells", default: [], array: true
    t.text "abilities", default: [], array: true
    t.string "background"
    t.integer "baseSTR", default: 0
    t.integer "baseDEX", default: 0
    t.integer "baseCON", default: 0
    t.integer "baseINT", default: 0
    t.integer "baseWIS", default: 0
    t.integer "baseCHA", default: 0
    t.integer "AC", default: 10
    t.integer "saveDC", default: 0
    t.integer "maxHP", default: 0
    t.integer "speed", default: 25
    t.integer "level", default: 1
    t.text "notes", default: [], array: true
    t.text "items", default: [], array: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
