# frozen_string_literal: true

class Player < ApplicationRecord

  belongs_to :game
  has_many :playerSpells
  has_many :playerFeats
  has_many :spells, through: :playerSpells
  has_many :feats, through: :playerFeats
  validates_presence_of :playerName
end
