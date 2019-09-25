# frozen_string_literal: true
class Feat < ApplicationRecord
  validates :name, uniqueness: true

end
