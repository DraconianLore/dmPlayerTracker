# frozen_string_literal: true

class Player < ApplicationRecord

  belongs_to :game
  has_many :playerSpells
  has_many :playerFeats
  has_many :feats, through: :playerFeats, dependent: :destroy
  has_many :spells, dependent: :destroy
  has_many :items, dependent: :destroy
  has_many :notes, dependent: :destroy
  validates_presence_of :playerName
end
