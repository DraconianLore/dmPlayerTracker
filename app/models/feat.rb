# frozen_string_literal: true
class Feat < ApplicationRecord

  has_many :playerFeats
  has_many :players, through: :playerFeats
  validates :search, uniqueness: true

end
