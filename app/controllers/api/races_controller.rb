class Api::RacesController < ApplicationController
  
  def index
    query = params[:search]
    race = Race.where(name: query)
    render :json => {
      result: race
    }
  end

end