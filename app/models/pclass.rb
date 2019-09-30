# frozen_string_literal: true
class Pclass < ApplicationRecord
  validates :name, uniqueness: true
end
