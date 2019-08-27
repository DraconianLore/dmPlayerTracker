class Api::PlayersController < ApplicationController
  
  def index
    # check user details
    render :json => {
      message: "player info here"
    }
  end
end