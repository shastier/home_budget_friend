class CreatePostExpenses < ActiveRecord::Migration[6.0]
  def change
    create_table :post_expenses do |t|
      t.integer :user_id
      t.integer :expense_id
      t.float :cost
      t.boolean :paid
      t.date :date

      t.timestamps
    end
  end
end
