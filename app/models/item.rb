class Item < ApplicationRecord
  has_many :playerItems
  has_many :players, through: :playerItems
end
