# frozen_string_literal: true
class Race < ApplicationRecord
  validates :name, uniqueness: true
end
