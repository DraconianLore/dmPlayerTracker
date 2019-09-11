class Game < ApplicationRecord
  belongs_to :user

  validates_presence_of :name

  has_many :players, dependent: :delete_all
end
