class Api::NotesController < ApplicationController
  
  def index
  
  end

  def create
    @player = Player.find(params[:player])
    @note = Note.new
    @note.name = params[:name]
    @note.description = params[:description]
    @note.player = @player
    if @note.save!
      render :json => {
        message: 'Note added',
        newItem: @note
      }
    else
      render :json => {
        message: 'Note creation failed',
        newItem: false
      }
    end
  end
  
  def destroy
    @note = Note.find(params[:id])
    if @note.delete
      render :json => {
        message: 'Note Deleted'
      }
    else
      render :json => {
        message: 'Note Deletion Failed'
      }
    end
  end

end