include ActionView::Helpers::PlayerHelper
class Api::PlayersController < ApplicationController

  def index
    game = Game.find(request.headers[:game])
    render :json => {
      players: game.players,
      gameName: game.name
    }
  end

  def show
    player = Player.find(params[:id])
    feats = player.playerFeats
    render :json {
      player: player,
      feats: feats
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

  def playeritems
    player = Player.find(params[:player])
    message = ''
    case params[:type]
    when 'Feat'
      feat = Feat.find(params[:item])
      player.playerFeats.create(feat: feat)
      message = 'Feat added'
    when 'Spell'
      spell = Spell.find(params[:item])
    else
      message = 'ERROR'
    end
    render :json => {
      message: message
    }
  end

  def loaditems
    player = Player.find(request.headers[:player])
    message = ''
    case params[:type]
    when 'Feat'
      message = player.playerFeats
    when 'Spell'
      message = player.playerSpells
    else
      message = 'ERROR'
    end
    render :json => {
      results: message
    }
  end

end