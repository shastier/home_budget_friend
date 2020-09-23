class RemoveUserIdExpenseIdFromPostExpenses < ActiveRecord::Migration[6.0]
  def change
    remove_column :post_expenses, :user_id, :integer
    remove_column :post_expenses, :expense_id, :integer
  end
end
