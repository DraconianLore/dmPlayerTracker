include ActionView::Helpers::PlayerHelper
class Api::NpcsController < ApplicationController
  skip_before_action :authenticate_request, only: %i[show]

  def index
    game = Game.find(request.headers[:game])
    render :json => {
      npcs: game.npcs,
      gameName: game.name
    }
  end

  def show
    player = Npc.find(params[:id])
    # for backwards compatibility
    if !player.playerUID
      player.playerUID = PlayerHelper.generateUID
      player.save
    end
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
    player = Npc.create(game_id: params[:gameID], portrait: params[:portrait])
    render :json => {
      playerID: player.id
    }
  end

  def update
    @player = Npc.find(params[:id])
    
    @player = PlayerHelper.test(@player, params[:player])
    if @player.save!
      render :json => {
        message: 'NPC Updated'
      }
    end
  end

  def destroy
    game = Game.find(request.headers[:game])
    player = Npc.find(params[:id])
    @feats = []
    player.feats.each do |f|
      @feats.push(f.id)
    end
    player.feats.destroy_all
    player.delete
    # Once players are deleted deleta associated feats
    @feats.each do |f|
      feat = Feat.find(f)
      feat.delete
    end

    render :json => {
      players: game.players
    }
  end

  def playeritems
    player = Npc.find(params[:player])
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