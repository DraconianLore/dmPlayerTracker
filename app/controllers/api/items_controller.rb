class Api::ItemsController < ApplicationController
  
  def index
    
  end

  def create
    @player = Player.find(params[:player])
    @item = Item.new
    @item.name = params[:name]
    @item.description = params[:description]
    @item.player = @player
    if @item.save!
      render :json => {
        message: 'Item added',
        newItem: @item
      }
    else
      render :json => {
        message: 'Item creation failed',
        newItem: false
      }
    end
  end

  def destroy
    @item = Item.find(params[:id])
    if @item.delete
      render :json => {
        message: 'Item Deleted'
      }
    else
      render :json => {
        message: 'Item Deletion Failed'
      }
    end
  end

end