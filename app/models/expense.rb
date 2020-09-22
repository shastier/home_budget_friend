class Expense < ApplicationRecord
  belongs_to :category
  has_many :post_expenses  
  has_many :users, through: :post_expenses
end
