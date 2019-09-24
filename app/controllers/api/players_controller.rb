include ActionView::Helpers::PlayerHelper
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
    @player = Player.find(params[:id])
    
    @player = PlayerHelper.test(@player, params[:player])
    puts @player.inspect
    if @player.save!
      render :json => {
        message: 'Player Updated'
      }
    end
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