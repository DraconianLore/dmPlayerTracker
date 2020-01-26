class SendMessageJob < ApplicationJob
  queue_as :default
  
  def perform(chat, user, message)
    MessagesChannel.broadcast_to chat, message: build_message(user, message)
  end

  def build_message(user, message)
    formattedMessage = {id: message.id, content: message.content, user: user.email, createdAt: message.created_at}
  end
end