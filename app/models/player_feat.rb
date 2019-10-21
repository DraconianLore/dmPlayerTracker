class PlayerFeat < ApplicationRecord
  belongs_to :player
  belongs_to :feat, dependant: :destroy
end
