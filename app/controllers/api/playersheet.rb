class Api::PlayersheetController < ApplicationController
  
 # POST /register
 skip_before_action :authenticate_request, only: %i[login register]

 def register
  puts params
   # Remove the following if statement if you want to enable new users to sign up without having an environmental variable set to NEWUSER as the signup 'Referal Code'
  if Player.find_by_playerUID(params[:UID])
    @player = Player.find_by_playerUID(params[:UID])
    if Puser.find_by_UID(params[:UID]) 
      render json: {
        message: 'player already exists'
      }, status: :bad_request
    else
      @user = Puser.create(user_params)
      @user.username = @player.playerName
      @user.player_id = @player.id
      if @user.save
        login
      else
        render json: {
          message: 'email already exists'
        }, status: :bad_request
      end
    end
   else
     render json: {
       message: 'Invalid player code'
     }, status: :bad_request
   end
 end

 def login
   authenticate params[:email], params[:password]
 end

  private

 def authenticate(email, password)
   command = AuthenticatePuser.call(email, password)

   if command.success?
     username = Puser.find_by_email(email)
     render json: {
       access_token: command.result,
       username: username.username
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