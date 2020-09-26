class PostExpense < ApplicationRecord
    belongs_to :expense
    belongs_to :user

    # return a list of post expenses by user_id
    def self.get_post_expenses_by_user_id(id)
        return PostExpense.joins(:expense).where(post_expenses: {user_id: id})
                                        .select(:id, :description, :cost, :paid, :date)
    end
end
