class Api::GamesController < ApplicationController
  
  def index
    user = User.find_by username: request.headers[:user]
    render :json => {
      games: user.games
    }

  end
  def create
    user = User.find_by username: request.headers[:user]
    game = Game.create(name: params[:name], user_id: user.id)
    render :json => {
      games: user.games,
      newGame: game.id
    }
  end

  def destroy
    user = User.find_by username: request.headers[:user]
    game = Game.find(params[:id])
    game.destroy
    render :json => {
      games: user.games
    }
  end

end