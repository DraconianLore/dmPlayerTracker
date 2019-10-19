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
  def update
    @note = Note.find(params[:id])
    @note.description = params[:newDescription]
    if @note.save!
      render :json => {
        message: 'Updated',
        item: @note
      } 
    else
      render :json => {
        message: 'SAVE FAILED'
      }
    end
  end
  def destroy
    @note = Note.find(params[:id])
    @note.delete
    render :json => {
      message: 'Deleted'
    }
  end

end