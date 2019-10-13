class Api::FeatsController < ApplicationController
  
  def index
    if params[:searchID]
      render :json => {
        feat: Feat.find(params[:searchID])
      }
    else
      query = params['search']
      query = query.downcase.gsub(/[^a-z]/, '')
      feat = Feat.where(search: query)
      render :json => {
        result: feat
      }
    end
  end

  def create
    search = params[:name]
    search = search.downcase.gsub(/[^a-z]/, '')

    feat = Feat.create(name: params[:name], description: params[:description], search: search)
    render :json => {
      message: 'Created',
      newFeat: feat
    }
  end

end