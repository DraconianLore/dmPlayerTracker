class AddPlayersheetUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :puser do |t|
      t.string :UID
      t.string :username
      t.string :email
      t.string :password_digest
    end
  end
end
