class Note < ApplicationRecord
  has_many :playerNotes
  has_many :players, through: :playerNotes
end
