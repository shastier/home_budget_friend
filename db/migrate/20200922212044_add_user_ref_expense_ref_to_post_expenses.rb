class AddUserRefExpenseRefToPostExpenses < ActiveRecord::Migration[6.0]
  def change
    add_reference :post_expenses, :user, null: false, foreign_key: true
    add_reference :post_expenses, :expense, null: false, foreign_key: true
  end
end
