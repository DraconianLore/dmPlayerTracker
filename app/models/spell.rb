class Spell < ApplicationRecord
  has_many :playerSpells
  has_many :players, through: :playerSpells
end
