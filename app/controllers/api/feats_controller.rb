class Api::FeatsController < ApplicationController
  
  def index
    query = params['search']
    query = query.downcase.gsub(/[^a-z]/, '')
    feat = Feat.where(search: query)
    puts feat
    render :json => {
      result: feat
    }
  end

  def create

  end

end