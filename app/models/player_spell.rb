class PlayerSpell < ApplicationRecord
  belongs_to :player
  belongs_to :spell
end
