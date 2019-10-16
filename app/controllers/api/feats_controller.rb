class Api::FeatsController < ApplicationController
  
  def index
    query = params['search']
    query = query.downcase.gsub(/[^a-z]/, '')
    feat = Feat.where(search: query)
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
        newFeat: false
      }
    else
      feat = Feat.create(name: params[:name], description: params[:description], search: search)
      render :json => {
        message: 'Created',
        newFeat: feat
      }
    end

  end
  
  def destroy
    player = Player.find(params[:player])
    player.feats.delete(params[:id])
    feat = Feat.find(params[:id]) 
    puts feat
    feat.delete

  end
end