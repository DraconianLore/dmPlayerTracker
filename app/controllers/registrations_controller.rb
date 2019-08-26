class RegistrationsController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      render json: @user
    else
      render json: @user.errors
    end
  end


  private 
  def user_params
    params.require(:userDetails).permit(:username, :password)
  end
end