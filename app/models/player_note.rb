class PlayerNote < ApplicationRecord
  belongs_to :player
  belongs_to :note
end
