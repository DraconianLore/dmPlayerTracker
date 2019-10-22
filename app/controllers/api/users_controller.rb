# frozen_string_literal: true

class Api::UsersController < ApplicationController
  # POST /register
  skip_before_action :authenticate_request, only: %i[login register]

  def register
    if params[:verifyNewUser] == ENV["NEWUSER"]

      @user = User.create(user_params)
      if @user.save
        @game = Game.create(name: "My First Game", user: @user)
        @game.save!
        login
      else
        render json: {
          message: 'email already exists'
        }, status: :bad_request
      end
    else
      render json: {
        message: 'Invalid referal code'
      }, status: :bad_request
    end
  end

  def login
    authenticate params[:email], params[:password]
  end

  def connect
    render :json => {
      message: 'ONLINE'
    }
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
      render json: { message: "Invalid email/password" }, status: :unauthorized
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
