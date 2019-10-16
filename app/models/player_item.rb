class PlayerItem < ApplicationRecord
  belongs_to :player
  belongs_to :item
end
