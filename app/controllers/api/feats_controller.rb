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
    if params[:player]
      search += params[:player]
      puts `search = #{search}`
    end
    feat = Feat.create(name: params[:name], description: params[:description], search: search)
    render :json => {
      message: 'Created',
      newFeat: feat
    }
  end

end