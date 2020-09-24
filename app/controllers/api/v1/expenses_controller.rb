# Expenses 
class Api::V1::ExpensesController < ApiController
    before_action :set_expense, only: [:show, :update, :destroy]
  
    # GET /api/v1/expenses
    def index
      @expenses = Expense.all
  
      render json: {
        message: "ok",
        expenses:  @expenses ,
      }
    end
  
    # GET /api/v1/expenses/:id
    def show
      render json: {
        message: "ok",
        expense: @expense
      }
    end
  
    # POST /api/v1/expenses
    def create
      expense = Expense.new(expense_params)
  
      if expense.save
        render json: {
          message: "ok",
          expense: expense,
        }
      else
        render json: {
          message: 'Could not create expense'
        }
      end
    end
  
    # PATCH/PUT /api/v1/expenses/:id
    def update
      if @expense.update(expense_params)
        render json: {
          message: "updated successfully",
          expense: @expense,
        }
      else
        render json: {
          message: 'Could not update expense'
        }
      end
    end
  
    # DELETE /api/v1/expenses/:id
    def destroy 
      if @expense.destroy
        render json: {
          message: "deleted successfully",
          expense: @expense,
        }
      else
        render json: {
          message: 'Could not delete expense'
        }
      end
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_expense
        @expense = Expense.find(params[:id])
      end
  
      # Only allow a trusted parameter "white list" through.
      def expense_params
        params.require(:expense).permit(:description, :category_id)
      end
end