class MessagesController < ApplicationController
  skip_before_action :authenticate_request

  def create
    message = Message.new(message_params)
    message.save
  end
  
  private
  
  def message_params
    params.require(:message).permit(:content, :chat_id, :user_id)
  end

end
