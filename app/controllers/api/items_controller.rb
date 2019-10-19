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
  def update
    @item = Item.find(params[:id])
    @item.description = params[:newDescription]
    if @item.save!
      render :json => {
        message: 'Updated',
        item: @item
      } 
    else
      render :json => {
        message: 'SAVE FAILED'
      }
    end
  end
  def destroy
    @item = Item.find(params[:id])
    @item.delete
    render :json => {
      message: 'Deleted'
    }  
  end

end