# frozen_string_literal: true

class Api::CharController < ApplicationController
  
  
  skip_before_action :authenticate_request, only: %i[login register]

  # get - api/char
  def load
    
  end

  # post - api/char/register
  def register
    if Player.find_by_playerUID(params[:UID])
      @player = Player.find_by_playerUID(params[:UID])
      if Char.find_by_UID(params[:UID])
        render json: {
          message: 'player already exitst'
        }, status: :bad_request
      else
        @user = Char.create(user_params)
        @user.username = @player.charName
        @user.player_id = @player.id
        if @user.save
          login
        else
          render json: {
            message: 'an error occurred'
          }, status: :bad_request
        end
      end
    else
      render json: {
        message: 'Invalid player code'
      }, status: :bad_request
     end
  end

  # post - api/char/login
  def login
    authenticate params[:email], params[:password]
  end

  private

  def authenticate(email, password)
    command = AuthenticateChar.call(email, password)

    if command.success?
      username = Char.find_by_email(email)
      render json: {
        access_token: command.result,
        username: username.username,
        userID: username.player_id
      }
    else
      render json: { message: 'Invalid email/password' }, status: :unauthorized
    end
  end

  def user_params
    params.permit(
      :UID,
      :email,
      :password
    )
  end
end
