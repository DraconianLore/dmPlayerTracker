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
    puts `CREATING\n#{params}`
    search = params[:name]
    search = search.downcase.gsub(/[^a-z]/, '')
    if Feat.where(search: search)
      render :json => {
        message: `Player already has a feat named #{params[:name]}`,
        newFeat: false
      }
    else
      if params[:player]
        search = `#{search}-P=#{params[:player]}`
        puts `search = #{search}`
      end
      feat = Feat.create(name: params[:name], description: params[:description], search: search)
      render :json => {
        message: 'Created',
        newFeat: feat
      }
    end
  end

end