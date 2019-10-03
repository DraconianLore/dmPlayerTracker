class Api::PclassesController < ApplicationController
  
  def index
    query = params[:search]
    race = Pclass.where(name: query)
    render :json => {
      result: race
    }
  end

end