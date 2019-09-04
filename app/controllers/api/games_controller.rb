class Api::GamesController < ApplicationController
  
  def index
    user = User.find_by username: request.headers[:user]
    # user = User.first
    # check user details
    render :json => {
      games: user.games
    }
  end
end