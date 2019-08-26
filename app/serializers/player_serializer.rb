class UserSerializer < ActiveModel::Serializer
  attributes :playerName, :charName, :id
  belongs_to :user
end