class UsersController < ApiController
    # before_action :require_login, except: [:create]

    def create
        user = User.create!(user_params)
        render json: { token: user.auth_token, name: user.name, last_name: user.last_name, email: user.email, username: user.username }
    end
  
    def profile
        user = User.find_by!(auth_token: request.headers[:token])
        user_post_expenses = PostExpense.where(user_id: user.id)
      # write `User.profile_info`
        render json: {
            user: { username: user.username, email: user.email, name: user.name, last_name: user.last_name },
            post_expenses: { user_post_expenses } 
        }
    end
  
    private
    def user_params
        params.require(:user).permit(:name, :last_name, :email, :username, :password)
    end
end
