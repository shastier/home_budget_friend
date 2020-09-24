class Api::V1::PostExpensesController < ApiController  
  # only logged in users can post expenses
    before_action :require_login, :set_post_expense

    # GET /api/v1/post_expenses
    def index
      post_expenses = PostExpense.all

      render json: {
        message: "ok",
        post_epenses:  post_expenses,
      }
    end

     # GET /api/v1/post_expenses/:id  
    def show
      post_expense = PostExpense.find(params[:id])
      
      post_expense_user = post_expense.user
      render json: { 
        message: "ok",
        post_expense: post_expense,
        username: post_expense_user.username 
      }
    end
    
    # POST /api/v1/post_expenses
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

    # PATCH/PUT /api/v1/post_expenses/:id
    def update
      if @post_expense.update(post_expense_params)
        render json: {
          message: "updated successfully",
          post_expense: @post_expense,
        }
      else
        render json: {
          message: 'Could not update post_expense'
        }
      end
    end
  
    # DELETE /api/v1/post_expenses/:id
    def destroy
      @post_expense.destroy
    end
  
    private
    # Use callbacks to share common setup or constraints between actions.
    def set_post_expense
      @post_expense = PostExpense.find(params[:id])
    end    

    def post_expense_params
      params.require(:post_expense).permit(:expense_id, :cost, :paid, :date)
    end
end
