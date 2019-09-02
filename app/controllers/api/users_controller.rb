# frozen_string_literal: true

class Api::UsersController < ApplicationController
  # POST /register
  skip_before_action :authenticate_request, only: %i[login register]

  def register
    @user = User.create(user_params)
    if @user.save
      # response = { message: 'User created successfully' }
      # render json: response, status: :created
      login
    else
      render json: @user.errors, status: :bad
    end
  end

  def login
    authenticate params[:email], params[:password]
  end


  private
   def authenticate(email, password)
    command = AuthenticateUser.call(email, password)

    if command.success?
      username = User.find_by_email(email)
      render json: {
        access_token: command.result,
        username: username.username
      }
    else
      render json: { error: command.errors }, status: :unauthorized
    end
   end

    def user_params
      params.permit(
        :username,
        :email,
        :password
      )
    end
 end
