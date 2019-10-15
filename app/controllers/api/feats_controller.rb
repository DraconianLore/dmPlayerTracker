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
    if params[:player]
     player = params[:player]
    end
    search = params[:name]
    search = search.downcase.gsub(/[^a-z]/, '')
    if Feat.where(search: search)
      render :json => {
        message: `Player already has a feat named #{params[:name]}`,
        newFeat: false
      }
    elsif player
    puts '\n############################\n'

        search = `#{search}P#{player}`
        puts `search = #{search}`
        feat = Feat.create(name: params[:name], description: params[:description], search: search)
        render :json => {
          message: 'Created',
          newFeat: feat
        }
    end
  end

end