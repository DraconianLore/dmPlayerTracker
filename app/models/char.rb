# frozen_string_literal: true

class Char < ApplicationRecord
  validates_presence_of :UID, :email, :password_digest
  validates :UID, uniqueness: true

  # encrypt password
  has_secure_password

end
