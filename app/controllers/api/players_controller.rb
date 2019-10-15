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
    feats = player.feats
    # Once database restructure is complete unhash these (currently breaking changes to current data)
    # notes = player.notes
    # spells = player.spells
    # items = player.items
    render :json => {
      player: player,
      feats: feats,
      # notes: notes,
      # spells: spells,
      # items: items
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
    puts `params \n#{params}`
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

end