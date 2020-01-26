class MessageSerializer < ActiveModel::Serializer
  attributes :id, :chat_id, :text, :created_at
end
