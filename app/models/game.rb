class Game < ApplicationRecord
  belongs_to :user

  validates_presence_of :name

  has_many :players, dependent: :destroy_all
end
