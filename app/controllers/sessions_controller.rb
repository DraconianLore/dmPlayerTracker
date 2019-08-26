class SessionsController < ApplicationController
  def create
    @user = User.find_by_username(user_params[:username])
    if @user.authenticate(user_params[:password])
      session[:user_id] = @user.id
      render json: @user
    else
      render json: {error: 'invalid login attempt'}
    end
  end

  def logout
    if logged_in?
      session.clear
    end
  end

  private 
  def user_params
    params.require(:userDetails).permit(:username, :password)
  end
end