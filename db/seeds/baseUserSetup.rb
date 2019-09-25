# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.new
user.username = 'seedUser'
user.email = 'seed@user.seed'
user.password_digest = 'blah'
user.save!

game = Game.new
game.name = 'Test game'
game.user = User.first
game.save!

player = Player.new
player.playerName = 'testPlayer'
player.charName = 'testChar'
player.game = Game.first
player.save!

puts '### BASIC SEEDING COMPLETE ###'