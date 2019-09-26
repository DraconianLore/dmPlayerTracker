class Api::RacesController < ApplicationController
  
  def index
    query = params[:search]
    race = Race.where(name: query)
    puts race
    render :json => {
      result: race
    }
  end

end