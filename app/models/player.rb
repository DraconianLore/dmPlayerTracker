# frozen_string_literal: true

class Player < ApplicationRecord

  belongs_to :game
  has_many :playerSpells
  has_many :playerFeats
  has_many :spells, through: :playerSpells, dependent: :destroy
  has_many :feats, through: :playerFeats, dependent: :destroy
  has_many :items, through: :playerItems, dependent: :destroy
  has_many :notes, through: :playerNotes, dependent: :destroy
  validates_presence_of :playerName
end
