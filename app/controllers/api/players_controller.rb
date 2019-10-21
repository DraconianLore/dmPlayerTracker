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
    notes = player.notes
    items = player.items
    spells = player.spells
    render :json => {
      player: player,
      feats: feats,
      notes: notes,
      items: items,
      spells: spells
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
    @feats = player.feats
    player.feats.destroy_all
    player.delete
    puts '#######################'
    puts @feats
    puts '#######################'

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

end