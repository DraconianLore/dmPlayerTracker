class Api::PlayersController < ApplicationController
  
  def index
    game = Game.find(request.headers[:game])
    render :json => {
      players: game.players,
      gameName: game.name
    }
  end

  def create
    player = Player.create(game_id: params[:gameID], portrait: params[:portrait])
    render :json => {
      playerID: player.id
    }
  end

  def update

  end

  def destroy
    game = Game.find(request.headers[:game])
    player = Player.find(params[:id])
    player.delete
    render :json => {
      players: game.players
    }
  end

end