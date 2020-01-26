class ChatsController < ApplicationController
  skip_before_action :authenticate_request

  def index
    @chats = Chat.all
    render json: @chats
  end

  def create
    @chat = Chat.new(chat_params)
    if @chat.save
      serialized_data = ActiveModelSerializers::Adapter::Json.new(
        ChatSerializer.new(@chat)
      ).serializable_hash
      ActionCable.server.broadcast 'chats_channel', serialized_data
      head :ok
    end
  end
  
  def show
    # get the chat room based on the chat room path
    @chat = Chat.find(params[:id])
    
    # render the json of the chat room through jbuilder
    # render 'chat_rooms/show.json.jbuilder', chatRoom: @chatRoom
    
  end
  

  private
  
  def chat_params
    params.require(:chat).permit(:title)
  end

end
