class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :last_name
      t.string :email
      t.string :username
      t.string :password_digest

      t.timestamps
    end
    add_index :users, :username, unique: true
  end
end
