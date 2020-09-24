class Api::V1::CategoriesController < ApiController
    before_action :set_category, only: [:show, :update, :destroy]
  
    # GET /api/v1/categories
    def index
      @categories = Category.all

      render json: {
        message: "ok",
        categories:  @categories,
      }
    end
  
    # GET /api/v1/categories/:id
    def show
      render json: {
        message: "ok",
        category: @category
      }
    end
  
    # POST /api/v1/categories
    def create
      category = Category.new(category_params)
  
      if category.save
        render json: {
          message: "ok",
          category: category,
        }
      else
        render json: {
          message: 'Could not create category'
        }
      end
    end
  
    # PATCH/PUT /api/v1/categories/:id
    def update
      if @category.update(category_params)
        render json: {
          message: "updated successfully",
          category: @category,
        }
      else
        render json: {
          message: 'Could not update category'
        }
      end
    end
  
    # DELETE /api/v1/categories/:id
    def destroy      
      if @category.destroy
        render json: {
          message: "deleted successfully",
          category: @category,
        }
      else
        render json: {
          message: 'Could not delete category'
        }
      end      
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_category
        @category = Category.find(params[:id])
      end
  
      # Only allow a trusted parameter "white list" through.
      def category_params
        params.require(:category).permit(:name)
      end
end