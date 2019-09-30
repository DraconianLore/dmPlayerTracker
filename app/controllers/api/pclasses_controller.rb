class Api::PclassesController < ApplicationController
  
  def index
    query = params[:search]
    race = Pclass.where(name: query)
    puts race
    render :json => {
      result: race
    }
  end

end