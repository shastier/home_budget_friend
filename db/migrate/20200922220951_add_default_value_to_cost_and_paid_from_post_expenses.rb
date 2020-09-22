class AddDefaultValueToCostAndPaidFromPostExpenses < ActiveRecord::Migration[6.0]
  def change
    change_column_default :post_expenses, :cost, 0.00
    change_column_default :post_expenses, :paid, false
  end
end
