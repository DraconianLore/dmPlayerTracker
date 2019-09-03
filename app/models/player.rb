# frozen_string_literal: true

class Player < ApplicationRecord
  belongs_to :game

  validates_presence_of :playerName
end
