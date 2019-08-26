class Api::PlayersController < ApplicationController
  
  def index
    render :json => {
      message: "hello!"
    }
  end
end