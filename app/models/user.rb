# frozen_string_literal: true

class User < ApplicationRecord
  validates_presence_of :username, :email, :password_digest
  validates :email, uniqueness: true

  # encrypt password
  has_secure_password

  has_many :games
end
