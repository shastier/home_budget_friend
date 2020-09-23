class User < ApplicationRecord
    has_many :post_expenses  
    has_many :expenses, through: :post_expenses
end
