# frozen_string_literal: true

c = Pclass.new
c.name = 'Barbarian'
c.hit_die = 12
c.itemProfs = [
  'Light armour',
  'Medium armour',
  'Shields',
  'Simple weapons',
  'Martial weapons'
]
c.saving_throws = %w[
  STR
  CON
]
c.level1 = ['2', 'Rage', 'Unarmoured Defense']
c.level2 = ['2', 'Reckless Attack', 'Danger Sense']
c.level3 = ['2', 'Primal Path']
c.level4 = ['2']
c.level5 = ['3', 'Extra Attack', 'Fast Movement']
c.level6 = ['3']
c.level7 = ['3', 'Mindless Rage']
c.level8 = ['3', 'Feral Instinct']
c.level9 = ['4']
c.level10 = ['4']
c.level11 = ['4', 'Relentless Rage']
c.level12 = ['4']
c.level13 = ['5', 'Brutal Critical']
c.level14 = ['5']
c.level15 = ['5', 'Persistent Rage']
c.level16 = ['5']
c.level17 = ['6']
c.level18 = ['6', 'Indomitable Might']
c.level19 = ['6']
c.level20 = ['6', 'Primal Champion']
c.save!

c = Pclass.new
c.name = 'Bard'
c.hit_die = 8
c.itemProfs = [
  'Light armour',
  'Simple weapons',
  'Longswords',
  'Rapiers',
  'Shortswords',
  'Hand Crossbows'
]
c.saving_throws = %w[
  DEX
  CHA
]
c.level1 = ['2', 'Bardic Inspiration']
c.level2 = ['2', 'Jack of All Trades', 'Song of Rest']
c.level3 = ['2', 'Bard College']
c.level4 = ['2']
c.level5 = ['3', 'Font of Inspiration']
c.level6 = ["3", "Countercharm"]
c.level7 = ['3']
c.level8 = ['3']
c.level9 = ['4']
c.level10 = ['4', 'Magical Secrets']
c.level11 = ['4']
c.level12 = ['4']
c.level13 = ['5']
c.level14 = ['5']
c.level15 = ['5']
c.level16 = ['5']
c.level17 = ['6']
c.level18 = ['6']
c.level19 = ['6']
c.level20 = ['6', 'Superior Inspiration']
c.save!

c = Pclass.new
c.name = 'Cleric'
c.hit_die = 8
c.itemProfs = [
  'Light armour',
  'Medium Armour',
  'Shields',
  'Simple Weapons'
]
c.saving_throws = %w[
  WIS
  CHA
]
c.level1 = ['2', 'Divine Domain']
c.level2 = ['2', 'Channel Divinity']
c.level3 = ['2']
c.level4 = ['2']
c.level5 = ['3', 'Destroy Undead']
c.level6 = ['3']
c.level7 = ['3']
c.level8 = ['3']
c.level9 = ['4']
c.level10 = ['4', 'Divine Intervention']
c.level11 = ['4']
c.level12 = ['4']
c.level13 = ['5']
c.level14 = ['5']
c.level15 = ['5']
c.level16 = ['5']
c.level17 = ['6']
c.level18 = ['6']
c.level19 = ['6']
c.level20 = ['6']
c.save!

c = Pclass.new
c.name = 'Druid'
c.hit_die = 8
c.itemProfs = [
  'Light armour',
  'Medium Armour',
  'Shields',
  'Clubs',
  'Daggers',
  'Javelins',
  'Maces',
  'Quarterstaffs',
  'Sickles',
  'Spears',
  'Darts',
  'Slings',
  'Scimitars',
  'Herbalism Kit'
]
c.saving_throws = %w[
  INT
  WIS
]
c.level1 = ["2", "Druidic"]
c.level2 = ['2', 'Wild Shape', 'Druid Cirlce']
c.level3 = ['2']
c.level4 = ['2']
c.level5 = ['3']
c.level6 = ['3']
c.level7 = ['3']
c.level8 = ['3']
c.level9 = ['4']
c.level10 = ['4']
c.level11 = ['4']
c.level12 = ['4']
c.level13 = ['5']
c.level14 = ['5']
c.level15 = ['5']
c.level16 = ['5']
c.level17 = ['6']
c.level18 = ['6', 'Timeless Body', 'Beast Spells']
c.level19 = ['6']
c.level20 = ["6", "Archdruid"]
c.save!

c = Pclass.new
c.name = 'Fighter'
c.hit_die = 10
c.itemProfs = [
  'ALL Armour',
  'Shields',
  'Simple Weapons',
  'Martial Weapons'
]
c.saving_throws = %w[
  STR
  CON
]
c.level1 = ['2', 'Fighting Style', 'Second Wind']
c.level2 = ['2', 'Action Surge']
c.level3 = ['2', 'Martial Archetype']
c.level4 = ['2']
c.level5 = ['3', 'Extra Attack']
c.level6 = ['3']
c.level7 = ['3']
c.level8 = ['3']
c.level9 = ["4", "Indomitable"]
c.level10 = ['4']
c.level11 = ['4']
c.level12 = ['4']
c.level13 = ['5']
c.level14 = ['5']
c.level15 = ['5']
c.level16 = ['5']
c.level17 = ['6']
c.level18 = ['6']
c.level19 = ['6']
c.level20 = ['6']
c.save!

c = Pclass.new
c.name = 'Monk'
c.hit_die = 8
c.itemProfs = [
  'Simple Weapons',
  'Shortswords'
]
c.saving_throws = %w[
  STR
  DEX
]
c.level1 = ['2', 'Unarmored Defense', 'Martial Arts']
c.level2 = ['2', 'Ki', 'Unarmored Movement']
c.level3 = ['2', 'Deflect Misslies', 'Monastic Tradition']
c.level4 = ['2', 'Slow Fall']
c.level5 = ['3', 'Extra Attack', 'Stunning Strike']
c.level6 = ['3', 'Ki-Empowered Strikes']
c.level7 = ['3', 'Evasion', 'Stillness of Mind']
c.level8 = ['3']
c.level9 = ['4']
c.level10 = ['4', 'Purity of Body']
c.level11 = ['4']
c.level12 = ['4']
c.level13 = ['5', 'Tongue of the Sun and Moon']
c.level14 = ['5', 'Diamond Soul']
c.level15 = ['5', 'Timeless Body']
c.level16 = ['5']
c.level17 = ['6']
c.level18 = ['6', 'Empty Body']
c.level19 = ['6']
c.level20 = ['6', 'Perfect Soul']
c.save!

c = Pclass.new
c.name = 'Paladin'
c.hit_die = 10
c.itemProfs = [
  'ALL Armour',
  'Shields',
  'Simple Weapons',
  'Martial Weapons'
]
c.saving_throws = %w[
  WIS
  CHA
]
c.level1 = ['2', 'Divine Sense', 'Lay on Hands']
c.level2 = ['2', 'Divine Smite', 'Fighting Style']
c.level3 = ['2', 'Divine Health', 'Sacred Oath']
c.level4 = ['2']
c.level5 = ['3', 'Extra Attack']
c.level6 = ['3', 'Aura of Protection']
c.level7 = ['3']
c.level8 = ['3']
c.level9 = ['4']
c.level10 = ['4', 'Aura of Courage']
c.level11 = ['4']
c.level12 = ['4']
c.level13 = ['5']
c.level14 = ['5', 'Cleansing Touch']
c.level15 = ['5']
c.level16 = ['5']
c.level17 = ['6']
c.level18 = ['6']
c.level19 = ['6']
c.level20 = ['6']
c.save!

c = Pclass.new
c.name = 'Ranger'
c.hit_die = 10
c.itemProfs = [
  'Light Armour',
  'Medium Armour',
  'Shields',
  'Simple Weapons',
  'Martial Weapons'
]
c.saving_throws = %w[
  STR
  DEX
]
c.level1 = ['2', 'Favored Enemy', 'Natural Explorer']
c.level2 = ['2', 'Fighting Style']
c.level3 = ['2', 'Ranger Archetype', 'Primeval Awareness']
c.level4 = ['2']
c.level5 = ['3', 'Extra Attack']
c.level6 = ['3']
c.level7 = ['3']
c.level8 = ['3', "Land's Stride"]
c.level9 = ['4']
c.level10 = ['4', 'Hide in Plain Sight']
c.level11 = ['4']
c.level12 = ['4']
c.level13 = ['5']
c.level14 = ["5" "Vanish"]
c.level15 = ['5']
c.level16 = ['5']
c.level17 = ['6']
c.level18 = ['6', 'Feral Senses']
c.level19 = ['6']
c.level20 = ['6', 'Foe Slayer']
c.save!

c = Pclass.new
c.name = 'Rogue'
c.hit_die = 8
c.itemProfs = [
  'Light Armour',
  'Simple Weapons',
  'Longswords',
  'Rapiers',
  'Shortswords',
  'Hand Crossbows',
  "Thieve's Tools"
]
c.saving_throws = %w[
  DEX
  INT
]
c.level1 = ['2', 'Sneak Attack', "Thieves' Cant"]
c.level2 = ['2', 'Cunning Action']
c.level3 = ['2', 'Roguish Archetype']
c.level4 = ['2']
c.level5 = ['3', 'Uncanny Dodge']
c.level6 = ['3']
c.level7 = ["3", "Evasion"]
c.level8 = ['3']
c.level9 = ['4']
c.level10 = ['4']
c.level11 = ['4', 'Reliable Talent']
c.level12 = ['4']
c.level13 = ['5']
c.level14 = ["5", "Blindsense"]
c.level15 = ['5', 'Slippery Mind']
c.level16 = ['5']
c.level17 = ['6']
c.level18 = ["6", "Elusive"]
c.level19 = ['6']
c.level20 = ['6', 'Stroke of Luck']
c.save!

c = Pclass.new
c.name = 'Sorcerer'
c.hit_die = 6
c.itemProfs = %w[
  Daggers
  Quarterstaffs
  Darts
  Slings
]
c.saving_throws = %w[
  CON
  CHA
]
c.level1 = ['2', 'Sorcerous Origin']
c.level2 = ['2', 'Font of Magic']
c.level3 = %w[2 Metamagic]
c.level4 = ['2']
c.level5 = ['3']
c.level6 = ['3']
c.level7 = ['3']
c.level8 = ['3']
c.level9 = ['4']
c.level10 = ['4']
c.level11 = ['4']
c.level12 = ['4']
c.level13 = ['5']
c.level14 = ['5']
c.level15 = ['5']
c.level16 = ['5']
c.level17 = ['6']
c.level18 = ['6']
c.level19 = ['6']
c.level20 = ['6', 'Sorcerous Restoration']
c.save!

c = Pclass.new
c.name = 'Warlock'
c.hit_die = 8
c.itemProfs = [
  'Light Armour',
  'Simple Weapons'
]
c.saving_throws = %w[
  WIS
  CHA
]
c.level1 = ['2', 'Pact Magic', 'Otherworldly Patron']
c.level2 = ['2', 'Eldrich Invocations']
c.level3 = ['2', 'Pact Boon']
c.level4 = ['2']
c.level5 = ['3']
c.level6 = ['3']
c.level7 = ['3']
c.level8 = ['3']
c.level9 = ['4']
c.level10 = ['4']
c.level11 = ['4', 'Mystic Arcanum']
c.level12 = ['4']
c.level13 = ['5']
c.level14 = ['5']
c.level15 = ['5']
c.level16 = ['5']
c.level17 = ['6']
c.level18 = ['6']
c.level19 = ['6']
c.level20 = ['6', 'Eldrich Master']
c.save!

c = Pclass.new
c.name = 'Wizard'
c.hit_die = 6
c.itemProfs = %w[
  Daggers
  Quarterstaffs
  Darts
  Slings
]
c.saving_throws = %w[
  INT
  WIS
]
c.level1 = ['2', 'Arcane Recovery']
c.level2 = ['2', 'Arcane Traditioin']
c.level3 = ['2']
c.level4 = ['2']
c.level5 = ['3']
c.level6 = ['3']
c.level7 = ['3']
c.level8 = ['3']
c.level9 = ['4']
c.level10 = ['4']
c.level11 = ['4']
c.level12 = ['4']
c.level13 = ['5']
c.level14 = ['5']
c.level15 = ['5']
c.level16 = ['5']
c.level17 = ['6']
c.level18 = ['6', 'Spell Mastery']
c.level19 = ['6']
c.level20 = ['6', 'Signature Spells']
c.save!

puts '### CLASS SEEDING COMPLETE ###'
