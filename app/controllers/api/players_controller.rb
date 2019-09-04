class Api::PlayersController < ApplicationController
  
  def index
    game = Game.find(request.headers[:game])
    
    # check user details
    render :json => {
      players: game.players,
      gameName: game.name
    }
  end
end