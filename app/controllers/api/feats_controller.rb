class Api::FeatsController < ApplicationController
  
  def index
    query = params['search']
    query = query.downcase.gsub(/[^a-z]/, '')
    feat = Feat.find_by(search: query)
    render :json => {
      result: feat
    }
  end

  def create
    search = params[:name]
    search = search.downcase.gsub(/[^a-z]/, '')
    search = search + 'p' + params[:player].to_s
    if Feat.where(search: search).exists?
      render :json => {
        message: 'Player already has this feat',
        newItem: false
      }
    else
      feat = Feat.create(name: params[:name], description: params[:description], search: search)
      render :json => {
        message: 'Created',
        newItem: feat
      }
    end
  end
  
  def update
    @feat = Feat.find(params[:id])
    @feat.description = params[:newDescription]
    if @feat.save!
      render :json => {
        message: 'Updated',
        item: @feat
      } 
    else
      render :json => {
        message: 'SAVE FAILED'
      }
    end
  end

  def destroy
    player = Player.find(params[:player])
    player.feats.delete(params[:id])
    feat = Feat.find(params[:id]) 
    feat.delete
    render :json => {
      message: 'Deleted'
    }

  end
end