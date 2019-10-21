class PlayerFeat < ApplicationRecord
  belongs_to :player
  has_one :feat, dependent: :destroy
end
