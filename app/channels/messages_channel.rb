class MessagesChannel < ApplicationCable::Channel
  def subscribed
    chat = Chat.find(params[:chat])
    stream_for chat
    # stream_from "some_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
