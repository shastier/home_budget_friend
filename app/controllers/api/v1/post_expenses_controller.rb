class Api::V1::PostExpensesController < ApiController  
  # only logged in users can post expenses
    before_action :require_login

    def index
      post_expenses = PostExpense.all
      render json: {
        message: "ok",
        post_epenses:  @post_expenses,
      }
    end
  
    def show
      post_expense = PostExpense.find(params[:id])
      
      post_expense_user = post_expense.user
      render json: { 
        message: "ok",
        post_expense: post_expense,
        username: post_expense_user.username 
      }
    end
  
    def create
      post_expense = PostExpense.new(post_expense_params)
      post_expense.user = current_user
  
      if post_expense.save
        render json: {
          message: 'ok',
          post_expense: post_expense,
        }
      else
        render json: {
          message: 'Could not create post_expense'
        }
      end
    end
  
    private
    def post_expense_params
      params.require(:post_expense).permit(:expense_id, :cost, :paid, :date)
    end
end
