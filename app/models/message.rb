class Message < ApplicationRecord
  belongs_to :chat

  after_commit { SendMessageJob.perform_later(self.chat_room, self.user, self) }
  
end
