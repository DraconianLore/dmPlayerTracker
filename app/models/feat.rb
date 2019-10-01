# frozen_string_literal: true
class Feat < ApplicationRecord
  validates :search, uniqueness: true

end
