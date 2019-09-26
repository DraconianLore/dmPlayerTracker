
r = Race.new
r.name = "Dwarf"
r.speed = 25
r.languages = [ "Common", "Dwarvish"]
r.traits = ["Darkvision", "Dwarven Resilience", "Stonecunning"]
r.save!

r = Race.new
r.name = "Elf"
r.speed = 30
r.languages = ["Common", "Elvish"]
r.traits = ["Darkvision", "Fey Ancestry", "Trance"]
r.save!

r = Race.new
r.name = "Halfling"
r.speed = 25
r.languages = ["Common", "Halfling"]
r.traits = [ "Brave", "Halfling Nimbleness", "Lucky"]
r.save!

r = Race.new
r.name = "Human"
r.speed = 30
r.languages = ["Common"]
r.traits = []
r.save!

r = Race.new
r.name = "Dragonborn"
r.speed = 30
r.languages = ["Common", "Draconic"]
r.traits = ["Draconic Ancestry", "Breath Weapon", "Damage Resistance"]
r.save!

r = Race.new
r.name = "Gnome"
r.speed = 25
r.languages = ["Common", "Gnomish"]
r.traits = ["Darkvision", "Gnome Cunning"]
r.save!

r = Race.new
r.name = "Half-Elf"
r.speed = 30
r.languages = ["Common", "Elvish"]
r.traits = ["Darkvision", "Fey Ancestry"]
r.save!

r = Race.new
r.name = "Half-Orc"
r.speed = 30
r.languages = ["Common", "Orcish"]
r.traits = ["Darkvision", "Savage Attacks", "Relentless Endurance"]
r.save!

r = Race.new
r.name = "Tiefling"
r.speed = 30
r.languages = ["Common", "Infernal"]
r.traits = ["Darkvision", "Hellish Resistance", "Infernal Legacy"]
r.save!



puts '### RACE SEEDING COMPLETE ###'
