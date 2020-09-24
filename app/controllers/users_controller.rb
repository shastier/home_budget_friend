class UsersController < ApplicationController
    before_action :require_login, except: [:create]

    def create
      user = User.create!(user_params)
      render json: { token: user.auth_token }
    end
  
    def profile
      user = User.find_by!(auth_token: request.headers[:token])
      # write `User.profile_info`
      render json: { user: { username: user.username, email: user.email, name: user.name } }
    end
  
    private
    def user_params
      params.require(:user).permit(:username, :email, :password, :name)
    end
end
