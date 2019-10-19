class Api::SpellsController < ApplicationController
  
  def index
  
  end

  def create
    @player = Player.find(params[:player])
    @spell = Spell.new
    @spell.name = params[:name]
    @spell.description = params[:description]
    @spell.range = params[:range]
    @spell.components = params[:components]
    @spell.ritual = params[:ritual]
    @spell.concentration = params[:concentration]
    @spell.duration = params[:duration]
    @spell.casting_time = params[:casting_time]
    @spell.level = params[:level]
    @spell.school = params[:school]
    @spell.player = @player

    if @spell.save!
      render :json => {
        message: 'Spell added',
        spell: @spell
      }
    else
      render :json => {
        message: 'Spell creation failed',
        spell: false
      }
    end
  end
end